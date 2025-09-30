import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { TreeType } from './TreeTypeSelector';

interface Person {
  name: string;
  born?: string;
  died?: string;
  children?: Person[];
}

interface FamilyTreeProps {
  treeType?: TreeType;
}

const sampleData: Person = {
  name: 'Jan Kowalski',
  born: '1920',
  died: '1995',
  children: [
    {
      name: 'Anna Kowalska',
      born: '1945',
      children: [
        {
          name: 'Piotr Nowak',
          born: '1970',
          children: [
            {
              name: 'Maria Nowak',
              born: '2000',
            },
            {
              name: 'Tomasz Nowak',
              born: '2002',
            },
          ],
        },
        {
          name: 'Katarzyna Nowak',
          born: '1972',
        },
      ],
    },
    {
      name: 'Marek Kowalski',
      born: '1948',
      children: [
        {
          name: 'Jakub Kowalski',
          born: '1975',
        },
      ],
    },
  ],
};

export const FamilyTree: React.FC<FamilyTreeProps> = ({ treeType = 'horizontal' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    // Dynamic sizing based on content
    const width = 1600;
    const height = 1000;
    const margin = { top: 50, right: 200, bottom: 50, left: 200 };

    // Create SVG with viewBox for responsiveness
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Create group for content
    const g = svg.append('g');
    
    // Set initial transform based on tree type
    if (treeType === 'radial') {
      g.attr('transform', `translate(${width / 2}, ${height / 2})`);
    } else {
      g.attr('transform', `translate(${margin.left}, ${margin.top})`);
    }

    // Convert data to hierarchy
    const root = d3.hierarchy(sampleData);

    // Create tree layout based on type
    let treeData;
    if (treeType === 'radial') {
      const treeLayout = d3
        .tree<Person>()
        .size([2 * Math.PI, Math.min(width, height) / 2 - 100])
        .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);
      treeData = treeLayout(root);
    } else {
      const treeLayout = d3
        .tree<Person>()
        .size([
          treeType === 'horizontal' ? height - margin.top - margin.bottom : width - margin.left - margin.right,
          treeType === 'horizontal' ? width - margin.left - margin.right : height - margin.top - margin.bottom,
        ])
        .separation((a, b) => (a.parent === b.parent ? 1 : 1.2));
      treeData = treeLayout(root);
    }

    // Create links (lines between nodes)
    g.selectAll('.link')
      .data(treeData.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', 'var(--amber-8)')
      .attr('stroke-width', 2)
      .attr('d', (d: any) => {
        if (treeType === 'radial') {
          return d3.linkRadial<any, any>()
            .angle((d: any) => d.x)
            .radius((d: any) => d.y)(d);
        } else if (treeType === 'vertical') {
          return d3.linkVertical<any, any>()
            .x((d: any) => d.x)
            .y((d: any) => d.y)(d);
        } else {
          return d3.linkHorizontal<any, any>()
            .x((d: any) => d.y)
            .y((d: any) => d.x)(d);
        }
      });

    // Create nodes
    const nodes = g
      .selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => {
        if (treeType === 'radial') {
          const angle = d.x;
          const radius = d.y;
          return `rotate(${(angle * 180) / Math.PI - 90}) translate(${radius},0)`;
        } else if (treeType === 'vertical') {
          return `translate(${d.x},${d.y})`;
        } else {
          return `translate(${d.y},${d.x})`;
        }
      });

    // Add circles for nodes
    nodes
      .append('circle')
      .attr('r', 8)
      .attr('fill', 'var(--amber-9)')
      .attr('stroke', 'var(--amber-11)')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer');

    // Add rectangles for person cards
    nodes
      .append('rect')
      .attr('x', 15)
      .attr('y', -25)
      .attr('width', 140)
      .attr('height', 50)
      .attr('rx', 6)
      .attr('fill', 'var(--amber-3)')
      .attr('stroke', 'var(--amber-7)')
      .attr('stroke-width', 1.5)
      .style('cursor', 'pointer');

    // Add name text
    nodes
      .append('text')
      .attr('x', 25)
      .attr('y', -8)
      .attr('font-size', '13px')
      .attr('font-weight', 'bold')
      .attr('fill', 'var(--brown-12)')
      .text((d) => d.data.name)
      .style('cursor', 'pointer');

    // Add birth/death dates
    nodes
      .append('text')
      .attr('x', 25)
      .attr('y', 8)
      .attr('font-size', '10px')
      .attr('fill', 'var(--brown-10)')
      .text((d) => {
        const born = d.data.born || '?';
        const died = d.data.died ? ` - ${d.data.died}` : '';
        return `*${born}${died}`;
      })
      .style('cursor', 'pointer');

    // Add hover effects
    nodes
      .on('mouseover', function () {
        d3.select(this).select('rect').attr('fill', 'var(--amber-4)');
      })
      .on('mouseout', function () {
        d3.select(this).select('rect').attr('fill', 'var(--amber-3)');
      });
  }, [treeType]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        ref={svgRef}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'visible',
        }}
      />
    </div>
  );
};

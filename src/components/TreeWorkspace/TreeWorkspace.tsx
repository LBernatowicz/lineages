import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomControls } from './components/ZoomControls';
import { FamilyTree } from './components/FamilyTree';
import { TreeTypeSelector } from './components/TreeTypeSelector';
import type { TreeType } from './components/TreeTypeSelector';

export const TreeWorkspace: React.FC = () => {
  const [treeType, setTreeType] = useState<TreeType>('horizontal');

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 36px)' }}>
      {/* Tree Type Selector */}
      <TreeTypeSelector selectedType={treeType} onTypeChange={setTreeType} />

      {/* SVG Pattern Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1.5" fill="#f59e0b" />
          </pattern>
        </defs>
      </svg>

      <TransformWrapper
        initialScale={1}
        minScale={0.3}
        maxScale={3}
        centerOnInit={true}
        limitToBounds={false}
        panning={{ disabled: false }}
        wheel={{ step: 0.1 }}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Scrollable/Zoomable Canvas */}
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: '100%',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '10000px',
                  height: '10000px',
                }}
              >
                {/* Dotted Background with SVG Pattern */}
                <svg
                  width="10000"
                  height="10000"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <rect width="10000" height="10000" fill="#fef9e7" />
                  <rect width="10000" height="10000" fill="url(#dotPattern)" />
                </svg>

                {/* Content Area - D3 Family Tree */}
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '2000px',
                    height: '1200px',
                    zIndex: 10,
                  }}
                >
                  <FamilyTree treeType={treeType} />
                </div>
              </div>
            </TransformComponent>

            {/* Zoom Controls - poza TransformComponent */}
            <ZoomControls
              onZoomIn={() => zoomIn()}
              onZoomOut={() => zoomOut()}
              onReset={() => resetTransform()}
            />
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

import React from 'react';
import { TreeWorkspace } from '../components/TreeWorkspace/TreeWorkspace';

export const TreePage: React.FC = () => {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 36px)' }}>
      <TreeWorkspace />
    </div>
  );
};

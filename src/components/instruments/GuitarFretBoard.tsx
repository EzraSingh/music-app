import React, { useState, useLayoutEffect, useMemo, FunctionComponent } from 'react';
import rd3 from 'react-d3-library';
import _compose from 'lodash/fp/compose';
import renderNodes from './guitar.d3';

const RD3Component = rd3.Component;

export interface GuitarFretBoardProps {}

const GuitarFretBoard: FunctionComponent<GuitarFretBoardProps> = ({
  children,
}) => {
  const [d3Node, setD3Node] = useState<HTMLDivElement | string>('');

  useLayoutEffect(() => { 
    const node = renderNodes();
    setD3Node(node);
  }, []);

  return <RD3Component data={d3Node} />
};

export default GuitarFretBoard;

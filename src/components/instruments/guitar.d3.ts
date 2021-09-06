import { Note, Interval, Scale } from '@tonaljs/tonal';
import * as d3 from 'd3';
import ExecutionEnv from 'exenv';
import _compose from 'lodash/fp/compose';
import _reverse from 'lodash/fp/reverse';

export interface FretBoardDisplayFilters {}

export interface FretBoardDisplayProps {
  tuning?: string[];
  scale?: [string, string];
  showIntervals?: boolean;
  filters?: FretBoardDisplayFilters;
}

export default function renderNodes(
  descriptor: FretBoardDisplayProps = {}
): HTMLDivElement | string {
  if (ExecutionEnv.canUseDOM) {
    const node = document.createElement('div');

    const svg = d3
      .select(node)
      .append('svg')
      .attr('width', `100%`)
      .attr('height', `100%`);

    _compose(renderStrings)(svg)(descriptor);

    return node;
  } else {
    return '';
  }
}

export function renderStrings(
  svg: d3.Selection<SVGElement, unknown, null, undefined>,
  stringCount = 7,
  fretCount = 24,
  renderColorTones = false
) {
  const yOffset = 100 / stringCount;
  const yMedianOffset = yOffset / 2;
  const xOffset = 100 / fretCount;
  const xMedianOffset = xOffset / 2;
  return ({
    tuning = ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
    scale = ['C', 'ionian'],
    showIntervals = false,
  }: FretBoardDisplayProps) => {
    const [scalarRootNote, scaleName] = scale;
    const scaleNotes = Scale.get(scale).notes;
    return _reverse(tuning).forEach((tuningRootNote, i) => {
      /**
       * determine height based on full height (100%),
       * round to 4 decimal places
       */
      const [y] = (yMedianOffset + i * yOffset)
        .toString()
        .match(/^-?\d+(?:\.\d{0,4})?/) as RegExpExecArray;
      svg
        .append('line')
        .attr('x1', 0)
        .attr('y1', `${y}%`)
        .attr('x2', `100%`)
        .attr('y2', `${y}%`)
        .style('stroke', 'rgb(128,128,128)')
        .style('stroke-width', 4);
      new Array(fretCount).fill(null).forEach((_, j) => {
        /**
         * determine height based on full width (100%),
         * round to 4 decimal places
         */
        const [x] = (xMedianOffset + j * xOffset)
          .toString()
          .match(/^-?\d+(?:\.\d{0,4})?/) as RegExpExecArray;
        const note = Note.transpose(tuningRootNote, Interval.fromSemitones(j));
        svg
          .append('line')
          .attr('x1', `${x}%`)
          .attr('y1', 0)
          .attr('x2', `${x}%`)
          .attr('y2', `${y}%`)
          .attr('transform', 'translate(32, 0)')
          .style('stroke', 'rgb(0,0,0)')
          .style('stroke-width', 2);
        if (scaleNotes.includes(note)) {
          svg
            .append('circle')
            .attr('cx', `${x}%`)
            .attr('cy', `${y}%`)
            .attr('r', 12)
            .attr('fill', note === scalarRootNote ? '#084B83' : '#000000');
          svg
            .append('text')
            .attr('dx', `${x}%`)
            .attr('dy', `${y}%`)
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(0, 4)')
            .attr('fill', 'white')
            .text(showIntervals ? Interval.distance(scale[0], note) : note);
        } else if (renderColorTones) {
          svg
            .append('circle')
            .attr('cx', `${x}%`)
            .attr('cy', `${y}%`)
            .attr('r', 12)
            .attr('fill', '#888888');
          svg
            .append('text')
            .attr('dx', `${x}%`)
            .attr('dy', `${y}%`)
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(0, 4)')
            .attr('fill', 'white')
            .text(showIntervals ? Interval.distance(scale[0], note) : note);
        }
      });
    });
  };
}

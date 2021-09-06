import React, { useState, FunctionComponent } from 'react';
import {  useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Note, Interval } from '@tonaljs/tonal';
import cx from 'classnames';
import _compose from 'lodash/fp/compose';
import { NoteName, ReduxState } from '../interfaces';
import { setRootNote } from '../redux/actions';

export interface NoteSelectorProps {}

const NoteSelector: FunctionComponent<NoteSelectorProps> = ({}) => {
  const selectedNote = useSelector<ReduxState, NoteName | string>((state: ReduxState) => state.app.rootNote || 'C');
  const dispatch = useDispatch();
  const [showSharps, setShowSharps] = useState(false);
  const setSelectedNote = _compose(dispatch, setRootNote)
  return (
    <div
      className={cx('noteSelector', {
        // ? Remove potential sharp/hashkey from CSS classname
        [selectedNote.includes('#')
          ? Note.enharmonic(selectedNote)
          : selectedNote]: true,
      })}
    >
      {new Array(12).fill(null).map((_, i) => {
        /**
         * Render all 12 notes
         */
        const note = _compose(Note.simplify, Note.transpose)(
          selectedNote,
          // ? transpose by a fifth (zeorth index makes this +6)
          Interval.fromSemitones(i + 6 * i)
        ) as NoteName;

        return (
          <div onClick={() => setSelectedNote(note)} className="note">
            {showSharps ? Note.enharmonic(note) : note}
          </div>
        );
      })}
    </div>
  );
};

export default NoteSelector;

import { NoteName } from '@tonaljs/tonal';
import { ChordName, ScaleName } from './music';

export interface ToggleVisibility {
  isVisible: boolean;
}

export interface Layer extends ToggleVisibility {
  type: 'chord' | 'scale' | 'tone';
  rootNote: NoteName;
  uiColor: string;
}

export interface ScaleLayer extends Layer {
  type: 'scale';
  name: ScaleName;
  fuctionalChords: ChordLayer[];
  borrowedChords: ChordLayer[];
}

export interface ChordLayer extends Layer {
  type: 'chord';
  name: ChordName;
  chordTones: ToneLayer[];
  alterations: ToneLayer[];
}

export interface ToneLayer extends Layer {
  type: 'tone';
  chromatics: {
    // ? used to toggle visibility of chroma tones
    [chromaticTone: string]: boolean;
  };
}

export type AppLayer = ScaleLayer | ChordLayer | ToneLayer;

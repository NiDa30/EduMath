import { AppState } from '../types';
import { 
  mathLesson9_1, 
  mathKhbd5512, 
  mathSlides, 
  mathExam7991, 
  mathQuestions, 
  mathScoringGuide 
} from './mathPresets';

export const initialAppState: AppState = {
  schemaVersion: '2.0-MATH',
  version: '2.0.0-MATH-WORKSPACE',
  lastUpdated: new Date().toISOString(),
  activeModule: 'dashboard',
  currentLessonId: mathLesson9_1.id,
  lessons: [
    mathLesson9_1
  ],
  khbd: mathKhbd5512,
  slides: mathSlides,
  exam: mathExam7991,
  questions: mathQuestions,
  scoringGuide: mathScoringGuide,
  checklist: {
    hasLessonObjectives: true,
    hasActivities: true,
    hasPartIITrueFalseFourStatements: true,
    hasMatrixSync: true,
    hasExportOffice: true,
    hasJsonHandoverBlock: true
  }
};

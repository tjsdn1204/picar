export interface HeaderProps {
    title: string;
    goToPrevious?:() => void;
}

export interface ProgressBarProps {
    progress: number;
}

export interface QuestionAnswers {
    [questionId: string]: string | string[];
}

export interface SurveyProps {
    onComplete: (answers: QuestionAnswers) => void; 
}


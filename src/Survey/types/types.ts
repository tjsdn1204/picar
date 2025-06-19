interface HeaderProps {
    title: string;
    goToPrevious?:() => void;
}

interface ProgressBarProps {
    progress: number;
}

interface QuestionAnswers {
    [questionId: string]: string | string[];
}

interface SurveyProps {
    onComplete: (answers: QuestionAnswers) => void; 
}


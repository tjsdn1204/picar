import Layout from "../layout/Layout.tsx";
import type { SurveyProps } from "../types/surveyType.ts";

const Survey: React.FC<SurveyProps> = ({ onComplete }) => {
    return (
        <>
            <Layout onComplete={onComplete}/>
        </>
    )
}

export default Survey;
import Layout from "../layout/Layout";
import type { SurveyProps } from "../types/surveyType";

const Survey: React.FC<SurveyProps> = ({ onComplete }) => {
    return (
        <>
            <Layout onComplete={onComplete}/>
        </>
    )
}

export default Survey;
import Layout from "../layout/Layout.tsx";

const Survey: React.FC<SurveyProps> = ({ onComplete }) => {
    return (
        <>
            <Layout onComplete={onComplete}/>
        </>
    )
}

export default Survey;
import { useParams } from "react-router";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p> 일기상세 페이지 입니다. </p>
    </div>
  );
};

export default Diary;

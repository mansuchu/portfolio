import { useSearchParams } from "react-router-dom";

//setSeartchParams는 searchParams를 변경시키는 역할을 한다.

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id=", id);

  const mode = searchParams.get("mode");
  console.log("mode=", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p> 일기 수정 페이지 입니다. </p>
    </div>
  );
};

export default Edit;

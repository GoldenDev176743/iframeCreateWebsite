import ProgressBar from "../../components/ProgressBar";

const Progress = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <div>{props.name}</div>
        <div>{props.value}</div>
      </div>
      <ProgressBar percent={props.percent} />
    </>
  );
};

export default Progress;

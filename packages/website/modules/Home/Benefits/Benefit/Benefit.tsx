interface Props {
  title: string;
  text: string;
}
const Benefit: React.FC<Props> = ({ title, text }: Props) => {
  return (
    <div className="column-6-xs column-6-md">
      <h2 className="title"> {title}</h2>
      <p className="text"> {text}</p>
      <style jsx>{`
        .title {
          font-weight: 400;
          font-size-: 1.5em;
          color: gray;
        }
        .text {
          max-width: 90%;
          font-size: 1.3em;
        }
      `}</style>

    </div>
  );
};

export default Benefit;

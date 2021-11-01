import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const TwoColumns: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <section className="container">
      <div className="columns margin-t-5">
        <div className="column-12-xs column-5-md title">
          <h2> {title} </h2>
        </div>
        <div className="column-12-xs column-7-md">{children}</div>
      </div>
      <style jsx>{`
        .title {
          font-weight: 800;
          font-size-: 2em;
        }
      `}</style>
    </section>
  );
};

export default TwoColumns;

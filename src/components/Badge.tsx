
interface Props {
  children: React.ReactNode;
}


const Badge = ({children}:Props) => {
  return (
    <h3 className="border border-pr2/50 px-1 rounded-full hover:bg-pr2/10 hover:border-pr2 flex justify-center items-center h-5">
      {children}
    </h3>
  );
}

export default Badge
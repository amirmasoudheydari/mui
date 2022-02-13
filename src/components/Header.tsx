type HeaderProps = {
  name: string;
};

export default function Header(props: HeaderProps) {
  const { name } = props;
  return (
    <div>
      <header>Greetings to {name} </header>
    </div>
  );
}

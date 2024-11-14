import Navigation from "../navigation/navigation";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div>Logo</div>
      <Navigation></Navigation>
    </header>
  );
}

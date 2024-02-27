import headerStyles from "@/app/header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.header}>
      <h1 className="text-center font-bold underline">Next App Demo</h1>
    </div>
  );
}

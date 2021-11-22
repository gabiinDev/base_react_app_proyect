import HeaderMenu from "../components/Menu/HeaderMenu";

export default function AdminLayout({ children }: any) {
  return (
    <>
      <HeaderMenu />
      {children}
    </>
  );
}

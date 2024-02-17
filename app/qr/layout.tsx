
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between bg-light-gray-qr">
      {children}
      </div>
    );
  }
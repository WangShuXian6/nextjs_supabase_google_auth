import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      授权失败
      <Link href="/" prefetch={true}>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          回到首页
        </button>
      </Link>
    </div>
  );
}

import TaskItem from "@/components/TaskItem";

const contohTugas = [
  { id: 1, title: "Belajar App Router Next.js" },
  { id: 2, title: "Membuat komponen TaskItem yang bisa dipakai ulang" },
  {
    id: 3,
    title:
      "Menguji judul yang sangat panjang sekali agar kita tahu apakah teks tetap terbaca rapi di layar ponsel yang sempit",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Daftar Tugas</h1>
      <div className="flex flex-col gap-3">
        {contohTugas.map((tugas) => (
          <TaskItem key={tugas.id} title={tugas.title} />
        ))}
      </div>
    </main>
  );
}
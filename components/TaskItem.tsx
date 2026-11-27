import type { ReactNode } from "react";

type TaskItemProps = {
    title: string;
    status?: "Belum Selesai" | "Selesai";
    children?: ReactNode; 
};

export default function TaskItem({
    title,
    status = "Belum Selesai",
    children,
}: TaskItemProps) {
    return (
        <div className="flex items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="min-w-0">
                <h2 className="break-words text-base font-semibold text-gray-900">
                    {title}
                </h2>
                <p
                    className={`mt-1 text-sm ${status === "Selesai" ? "text-green-600" : "text-amber-600"
                        }`}
                >
                    {status}
                </p>
            </div>
            {children}
        </div>
    );
}
import DashBoardSidebar from "@/components/Dashboard/DashBoardSidebar";

export default function DashboardLayout({ children }) {
    return <section className="flex min-h-screen">
        <DashBoardSidebar />
        <div className="flex-1">
            {children}
        </div>
    </section>
}
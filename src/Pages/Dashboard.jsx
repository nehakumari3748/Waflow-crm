import {
  MessageSquare,
  Users,
  Mail,
  UserPlus,
  Zap,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Total Conversations",
      value: "1,248",
      icon: MessageSquare,
    },
    {
      title: "Active Conversations",
      value: "326",
      icon: Users,
    },
    {
      title: "Unread Messages",
      value: "84",
      icon: Mail,
    },
    {
      title: "Leads Generated",
      value: "326",
      icon: UserPlus,
    },
    {
      title: "Automation Success Rate",
      value: "72.8%",
      icon: Zap,
    },
  ];

  return (
    <div className="dashboard">

      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Overview of your WhatsApp CRM activity</p>
        </div>
      </div>

      <div className="stats-grid">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.title}>

              <div className="stat-icon">
                <Icon size={22} />
              </div>

              <div className="stat-info">
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Dashboard;
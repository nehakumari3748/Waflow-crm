import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const messageData = [
  { day: "Mon", sent: 420, received: 310 },
  { day: "Tue", sent: 510, received: 380 },
  { day: "Wed", sent: 460, received: 350 },
  { day: "Thu", sent: 800, received: 250 },
  { day: "Fri", sent: 580, received: 410 },
  { day: "Sat", sent: 390, received: 280 },
  { day: "Sun", sent: 450, received: 320 },
];

const leadData = [
  { month: "Jan", leads: 120 },
  { month: "Feb", leads: 165 },
  { month: "Mar", leads: 142 },
  { month: "Apr", leads: 210 },
  { month: "May", leads: 245 },
  { month: "Jun", leads: 326 },
];

const automationData = [
  { name: "Successful", value: 73 },
  { name: "Failed", value: 27 },
];

function Analytics() {
  return (
    <div className="analytics-page">

      {/* Page Header */}
      <div className="analytics-heading">
        <div>
          <h2>Analytics</h2>
          <p>Track your messaging and automation performance</p>
        </div>

        <select className="date-filter">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="analytics-stats">

        <div className="analytics-card">
          <span className="analytics-label">Messages Sent</span>
          <h3>3,430</h3>
          <span className="analytics-growth">↑ 12.5% from last period</span>
        </div>

        <div className="analytics-card">
          <span className="analytics-label">Messages Received</span>
          <h3>2,480</h3>
          <span className="analytics-growth">↑ 8.2% from last period</span>
        </div>

        <div className="analytics-card">
          <span className="analytics-label">Response Rate</span>
          <h3>72.3%</h3>
          <span className="analytics-growth">↑ 5.4% from last period</span>
        </div>

        <div className="analytics-card">
          <span className="analytics-label">Automation Success</span>
          <h3>72.8%</h3>
          <span className="analytics-growth">↑ 4.8% from last period</span>
        </div>

        <div className="analytics-card">
          <span className="analytics-label">Leads Generated</span>
          <h3>326</h3>
          <span className="analytics-growth">↑ 16.7% from last period</span>
        </div>

        <div className="analytics-card">
          <span className="analytics-label">Conversion Rate</span>
          <h3>24.6%</h3>
          <span className="analytics-growth">↑ 3.2% from last period</span>
        </div>

      </div>

      {/* Charts Row */}
      <div className="charts-grid">

        {/* Messages Chart */}
        <div className="chart-card large-chart">
          <div className="chart-header">
            <div>
              <h3>Messages Overview</h3>
              <p>Sent vs received messages</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={messageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="sent"
                name="Sent"
                fill="#25D366"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="received"
                name="Received"
                fill="#667085"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Automation Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <h3>Automation Success</h3>
              <p>Workflow execution performance</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={automationData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={110}
                paddingAngle={4}
              >
                {automationData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "#25D366" : "#E5E7EB"}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="automation-percentage">
            <strong>72.8%</strong>
            <span>Success Rate</span>
          </div>
        </div>

      </div>

      {/* Leads Chart */}
      <div className="chart-card leads-chart">
        <div className="chart-header">
          <div>
            <h3>Leads Generated</h3>
            <p>Monthly lead generation trend</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={leadData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="leads"
              name="Leads"
              stroke="#25D366"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Analytics;

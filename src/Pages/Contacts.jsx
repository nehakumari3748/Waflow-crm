import { useState } from "react";

import {
  Search,
  Plus,
  ArrowUpDown,
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
} from "lucide-react";

function Contacts() {
  // =========================================
  // CONTACT DATA
  // =========================================

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      company: "Tech Solutions Pvt Ltd",
      status: "New Lead",
      tags: ["WhatsApp", "Interested"],
      assignedTo: "Neha",
      lastConversation: "Today, 10:42 AM",
      email: "rahul@example.com",
      location: "Jamshedpur, India",
    },

    {
      id: 2,
      name: "Priya Singh",
      phone: "+91 98765 12345",
      company: "Priya Enterprises",
      status: "Customer",
      tags: ["Customer"],
      assignedTo: "Neha",
      lastConversation: "Today, 9:35 AM",
      email: "priya@example.com",
      location: "Ranchi, India",
    },

    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 91234 56789",
      company: "Amit Industries",
      status: "Follow Up",
      tags: ["Follow Up"],
      assignedTo: "Neha",
      lastConversation: "Yesterday",
      email: "amit@example.com",
      location: "Bokaro, India",
    },

    {
      id: 4,
      name: "Sneha Verma",
      phone: "+91 99887 77665",
      company: "Verma Traders",
      status: "Interested",
      tags: ["Interested", "WhatsApp"],
      assignedTo: "Rahul",
      lastConversation: "Yesterday",
      email: "sneha@example.com",
      location: "Jamshedpur, India",
    },

    {
      id: 5,
      name: "Rohan Mehta",
      phone: "+91 90123 45678",
      company: "Mehta Technologies",
      status: "New Lead",
      tags: ["New Lead"],
      assignedTo: "Rahul",
      lastConversation: "Sep 17, 2026",
      email: "rohan@example.com",
      location: "Dhanbad, India",
    },

    {
      id: 6,
      name: "Anjali Gupta",
      phone: "+91 87654 32109",
      company: "Gupta Enterprises",
      status: "Customer",
      tags: ["Customer", "VIP"],
      assignedTo: "Neha",
      lastConversation: "Sep 16, 2026",
      email: "anjali@example.com",
      location: "Ranchi, India",
    },
  ]);

  // =========================================
  // STATES
  // =========================================

  const [searchText, setSearchText] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [sortOrder, setSortOrder] = useState("asc");

  const [selectedContact, setSelectedContact] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [newName, setNewName] = useState("");

  const [newPhone, setNewPhone] = useState("");

  const [newCompany, setNewCompany] = useState("");

  const [newEmail, setNewEmail] = useState("");

  const [newLocation, setNewLocation] = useState("");

  const [newStatus, setNewStatus] = useState("New Lead");

  // =========================================
  // FILTER + SEARCH
  // =========================================

  const filteredContacts = contacts.filter((contact) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      contact.name.toLowerCase().includes(search) ||
      contact.phone.toLowerCase().includes(search) ||
      contact.company.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =========================================
  // SORT
  // =========================================

  const sortedContacts = [...filteredContacts].sort(
    (a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    }
  );

  // =========================================
  // SORT HANDLER
  // =========================================

  function handleSort() {
    setSortOrder((previousOrder) =>
      previousOrder === "asc" ? "desc" : "asc"
    );
  }

  // =========================================
  // ADD CONTACT
  // =========================================

  function handleAddContact() {
    if (
      newName.trim() === "" ||
      newPhone.trim() === ""
    ) {
      alert("Please enter name and phone number.");

      return;
    }

    const newContact = {
      id: Date.now(),

      name: newName,

      phone: newPhone,

      company:
        newCompany || "Not Available",

      status: newStatus,

      tags: [newStatus],

      assignedTo: "Neha",

      lastConversation: "No conversation",

      email:
        newEmail || "Not Available",

      location:
        newLocation || "Not Available",
    };

    setContacts((previousContacts) => [
      ...previousContacts,
      newContact,
    ]);

    // Clear form
    setNewName("");

    setNewPhone("");

    setNewCompany("");

    setNewEmail("");

    setNewLocation("");

    setNewStatus("New Lead");

    setShowForm(false);
  }

  // =========================================
  // STATUS CLASS
  // =========================================

  function getStatusClass(status) {
    if (status === "Customer") {
      return "contact-status customer";
    }

    if (status === "New Lead") {
      return "contact-status new-lead";
    }

    if (status === "Follow Up") {
      return "contact-status follow-up";
    }

    return "contact-status interested";
  }

  return (
    <div className="contacts-page">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="contacts-header">

        <div>
          <h2>Contacts</h2>

          <p>
            Manage your customers and leads
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />

          Add Contact
        </button>

      </div>


      {/* =====================================
          TOOLBAR
      ===================================== */}

      <div className="contacts-toolbar">

        {/* SEARCH */}

        <div className="contacts-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search contacts..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />

        </div>


        {/* STATUS FILTER */}

        <select
          className="status-filter"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >
          <option value="All">
            All Status
          </option>

          <option value="New Lead">
            New Lead
          </option>

          <option value="Customer">
            Customer
          </option>

          <option value="Follow Up">
            Follow Up
          </option>

          <option value="Interested">
            Interested
          </option>
        </select>


        {/* SORT */}

        <button
          className="sort-button"
          onClick={handleSort}
        >
          <ArrowUpDown size={17} />

          Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>

      </div>


      {/* =====================================
          CONTACT TABLE
      ===================================== */}

      <div className="contacts-table-container">

        <table className="contacts-table">

          <thead>

            <tr>

              <th>
                Customer
              </th>

              <th>
                Phone
              </th>

              <th>
                Company
              </th>

              <th>
                Status
              </th>

              <th>
                Tags
              </th>

              <th>
                Assigned To
              </th>

              <th>
                Last Conversation
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {sortedContacts.map((contact) => (

              <tr key={contact.id}>

                {/* CUSTOMER */}

                <td>

                  <div className="contact-customer">

                    <div className="contact-avatar">

                      {contact.name.charAt(0)}

                    </div>

                    <div>

                      <strong>
                        {contact.name}
                      </strong>

                      <span>
                        {contact.email}
                      </span>

                    </div>

                  </div>

                </td>


                {/* PHONE */}

                <td>
                  {contact.phone}
                </td>


                {/* COMPANY */}

                <td>

                  <div className="company-cell">

                    <Building2 size={15} />

                    {contact.company}

                  </div>

                </td>


                {/* STATUS */}

                <td>

                  <span
                    className={getStatusClass(
                      contact.status
                    )}
                  >
                    {contact.status}
                  </span>

                </td>


                {/* TAGS */}

                <td>

                  <div className="contact-tags">

                    {contact.tags.map((tag) => (

                      <span
                        className="contact-tag"
                        key={tag}
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </td>


                {/* ASSIGNED */}

                <td>
                  {contact.assignedTo}
                </td>


                {/* LAST CONVERSATION */}

                <td>
                  {contact.lastConversation}
                </td>


                {/* ACTION */}

                <td>

                  <button
                    className="contact-view-button"
                    onClick={() =>
                      setSelectedContact(contact)
                    }
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>


        {/* EMPTY */}

        {sortedContacts.length === 0 && (

          <div className="contacts-empty">

            <User size={30} />

            <h3>
              No contacts found
            </h3>

            <p>
              Try changing your search or filter.
            </p>

          </div>

        )}

      </div>


      {/* =====================================
          CONTACT DETAILS MODAL
      ===================================== */}

      {selectedContact && (

        <div className="modal-overlay">

          <div className="contact-modal">

            <div className="modal-header">

              <div>

                <h3>
                  Contact Details
                </h3>

                <p>
                  Customer information
                </p>

              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setSelectedContact(null)
                }
              >
                <X size={20} />
              </button>

            </div>


            {/* PROFILE */}

            <div className="contact-detail-profile">

              <div className="large-avatar">

                {selectedContact.name.charAt(0)}

              </div>

              <div>

                <h3>
                  {selectedContact.name}
                </h3>

                <span
                  className={getStatusClass(
                    selectedContact.status
                  )}
                >
                  {selectedContact.status}
                </span>

              </div>

            </div>


            {/* DETAILS */}

            <div className="contact-details-list">

              <div className="contact-detail-item">

                <Phone size={17} />

                <div>
                  <span>Phone</span>

                  <strong>
                    {selectedContact.phone}
                  </strong>
                </div>

              </div>


              <div className="contact-detail-item">

                <Mail size={17} />

                <div>
                  <span>Email</span>

                  <strong>
                    {selectedContact.email}
                  </strong>
                </div>

              </div>


              <div className="contact-detail-item">

                <Building2 size={17} />

                <div>
                  <span>Company</span>

                  <strong>
                    {selectedContact.company}
                  </strong>
                </div>

              </div>


              <div className="contact-detail-item">

                <MapPin size={17} />

                <div>
                  <span>Location</span>

                  <strong>
                    {selectedContact.location}
                  </strong>
                </div>

              </div>


              <div className="contact-detail-item">

                <User size={17} />

                <div>
                  <span>Assigned To</span>

                  <strong>
                    {selectedContact.assignedTo}
                  </strong>
                </div>

              </div>

            </div>


            <button
              className="primary-button contact-modal-close"
              onClick={() =>
                setSelectedContact(null)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* =====================================
          ADD CONTACT MODAL
      ===================================== */}

      {showForm && (

        <div className="modal-overlay">

          <div className="contact-modal">

            <div className="modal-header">

              <div>

                <h3>
                  Add Contact
                </h3>

                <p>
                  Create a new CRM contact
                </p>

              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setShowForm(false)
                }
              >
                <X size={20} />
              </button>

            </div>


            {/* NAME */}

            <div className="contact-form-group">

              <label>
                Customer Name *
              </label>

              <input
                type="text"
                placeholder="Enter customer name"
                value={newName}
                onChange={(event) =>
                  setNewName(event.target.value)
                }
              />

            </div>


            {/* PHONE */}

            <div className="contact-form-group">

              <label>
                Phone *
              </label>

              <input
                type="text"
                placeholder="+91 98765 43210"
                value={newPhone}
                onChange={(event) =>
                  setNewPhone(event.target.value)
                }
              />

            </div>


            {/* COMPANY */}

            <div className="contact-form-group">

              <label>
                Company
              </label>

              <input
                type="text"
                placeholder="Company name"
                value={newCompany}
                onChange={(event) =>
                  setNewCompany(event.target.value)
                }
              />

            </div>


            {/* EMAIL */}

            <div className="contact-form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="customer@example.com"
                value={newEmail}
                onChange={(event) =>
                  setNewEmail(event.target.value)
                }
              />

            </div>


            {/* LOCATION */}

            <div className="contact-form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                placeholder="City, India"
                value={newLocation}
                onChange={(event) =>
                  setNewLocation(event.target.value)
                }
              />

            </div>


            {/* STATUS */}

            <div className="contact-form-group">

              <label>
                Status
              </label>

              <select
                value={newStatus}
                onChange={(event) =>
                  setNewStatus(event.target.value)
                }
              >
                <option>
                  New Lead
                </option>

                <option>
                  Customer
                </option>

                <option>
                  Follow Up
                </option>

                <option>
                  Interested
                </option>

              </select>

            </div>


            {/* BUTTONS */}

            <div className="modal-actions">

              <button
                className="secondary-button"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={handleAddContact}
              >
                Add Contact
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Contacts;
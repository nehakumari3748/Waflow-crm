import { useState } from "react";

import {
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Inbox() {
  // -----------------------------
  // CONVERSATION DATA
  // -----------------------------

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      message: "Can you send me the pricing?",
      time: "10:42 AM",
      unread: 2,
      online: true,
      tag: "New Lead",

      company: "Tech Solutions Pvt Ltd",
      phone: "+91 98765 43210",
      email: "rahul@example.com",
      location: "Jamshedpur, India",
      owner: "Neha",
      leadSource: "WhatsApp",
      lastContacted: "Today, 10:40 AM",

      messages: [
        {
          id: 1,
          text: "Hi, I am interested in your product.",
          time: "10:35 AM",
          type: "incoming",
        },
        {
          id: 2,
          text: "Can you tell me about the pricing?",
          time: "10:38 AM",
          type: "incoming",
        },
        {
          id: 3,
          text: "Sure! I can share our pricing details with you.",
          time: "10:40 AM",
          type: "outgoing",
        },
        {
          id: 4,
          text: "Can you send me the pricing?",
          time: "10:42 AM",
          type: "incoming",
        },
      ],
    },

    {
      id: 2,
      name: "Priya Singh",
      message: "Thank you for the information.",
      time: "9:35 AM",
      unread: 0,
      online: true,
      tag: "Customer",

      company: "Priya Enterprises",
      phone: "+91 98765 12345",
      email: "priya@example.com",
      location: "Ranchi, India",
      owner: "Neha",
      leadSource: "Website",
      lastContacted: "Today, 9:35 AM",

      messages: [
        {
          id: 1,
          text: "Hello, I need some information.",
          time: "9:20 AM",
          type: "incoming",
        },
        {
          id: 2,
          text: "Sure, I would be happy to help.",
          time: "9:25 AM",
          type: "outgoing",
        },
        {
          id: 3,
          text: "Thank you for the information.",
          time: "9:35 AM",
          type: "incoming",
        },
      ],
    },

    {
      id: 3,
      name: "Amit Kumar",
      message: "I will get back to you tomorrow.",
      time: "Yesterday",
      unread: 1,
      online: false,
      tag: "Follow Up",

      company: "Amit Industries",
      phone: "+91 91234 56789",
      email: "amit@example.com",
      location: "Bokaro, India",
      owner: "Neha",
      leadSource: "Facebook",
      lastContacted: "Yesterday",

      messages: [
        {
          id: 1,
          text: "Can we schedule a call?",
          time: "Yesterday",
          type: "incoming",
        },
        {
          id: 2,
          text: "Yes, please let me know your preferred time.",
          time: "Yesterday",
          type: "outgoing",
        },
        {
          id: 3,
          text: "I will get back to you tomorrow.",
          time: "Yesterday",
          type: "incoming",
        },
      ],
    },

    {
      id: 4,
      name: "Sneha Verma",
      message: "Is the product available?",
      time: "Yesterday",
      unread: 0,
      online: false,
      tag: "Interested",

      company: "Verma Traders",
      phone: "+91 99887 77665",
      email: "sneha@example.com",
      location: "Jamshedpur, India",
      owner: "Neha",
      leadSource: "WhatsApp",
      lastContacted: "Yesterday",

      messages: [
        {
          id: 1,
          text: "Hi, is the product available?",
          time: "Yesterday",
          type: "incoming",
        },
      ],
    },
  ]);

  // -----------------------------
  // STATES
  // -----------------------------

  const [selectedId, setSelectedId] = useState(1);

  const [messageText, setMessageText] = useState("");

  const [searchText, setSearchText] = useState("");

  // -----------------------------
  // SELECTED CONVERSATION
  // -----------------------------

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedId
  );

  // -----------------------------
  // SEARCH CONVERSATIONS
  // -----------------------------

  const filteredConversations = conversations.filter((conversation) => {
    const search = searchText.toLowerCase();

    return (
      conversation.name.toLowerCase().includes(search) ||
      conversation.message.toLowerCase().includes(search) ||
      conversation.tag.toLowerCase().includes(search)
    );
  });

  // -----------------------------
  // SELECT CONVERSATION
  // -----------------------------

  function handleConversationClick(id) {
    setSelectedId(id);

    // Clear unread messages
    setConversations((previousConversations) =>
      previousConversations.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation
      )
    );
  }

  // -----------------------------
  // SEND MESSAGE
  // -----------------------------

  function handleSendMessage() {
    if (messageText.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: messageText,
      time: "Just now",
      type: "outgoing",
    };

    setConversations((previousConversations) =>
      previousConversations.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,

              message: messageText,

              time: "Just now",

              lastContacted: "Just now",

              messages: [...conversation.messages, newMessage],
            }
          : conversation
      )
    );

    // Clear input
    setMessageText("");
  }

  // -----------------------------
  // ENTER KEY
  // -----------------------------

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  // -----------------------------
  // ATTACHMENT
  // -----------------------------

  function handleAttachment() {
    alert("Attachment feature is ready for integration.");
  }

  // -----------------------------
  // EMOJI
  // -----------------------------

  function handleEmoji() {
    setMessageText((previousText) => previousText + " 😊");
  }

  // -----------------------------
  // CALL
  // -----------------------------

  function handleCall() {
    alert(`Calling ${selectedConversation.name}...`);
  }

  // -----------------------------
  // SAFETY CHECK
  // -----------------------------

  if (!selectedConversation) {
    return (
      <div className="empty-search">
        <p>No conversation selected.</p>
      </div>
    );
  }

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div className="inbox">

      {/* =====================================
          LEFT PANEL - CONVERSATIONS
      ===================================== */}

      <section className="conversation-panel">

        <div className="inbox-panel-header">

          <div>
            <h2>Inbox</h2>

            <p>84 unread messages</p>
          </div>

          <button className="icon-button">
            <MoreVertical size={20} />
          </button>

        </div>

        {/* SEARCH */}

        <div className="conversation-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search conversations..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />

        </div>

        {/* CONVERSATION LIST */}

        <div className="conversation-list">

          {filteredConversations.map((conversation) => (

            <div
              key={conversation.id}

              className={
                selectedId === conversation.id
                  ? "conversation-item active"
                  : "conversation-item"
              }

              onClick={() =>
                handleConversationClick(conversation.id)
              }
            >

              {/* AVATAR */}

              <div className="avatar-wrapper">

                <div className="conversation-avatar">

                  {conversation.name.charAt(0)}

                </div>

                {conversation.online && (
                  <span className="online-dot"></span>
                )}

              </div>

              {/* CONVERSATION CONTENT */}

              <div className="conversation-content">

                <div className="conversation-top">

                  <strong>
                    {conversation.name}
                  </strong>

                  <span>
                    {conversation.time}
                  </span>

                </div>

                <div className="conversation-bottom">

                  <p>
                    {conversation.message}
                  </p>

                  {conversation.unread > 0 && (
                    <span className="unread-count">
                      {conversation.unread}
                    </span>
                  )}

                </div>

                <span className="conversation-tag">

                  {conversation.tag}

                </span>

              </div>

            </div>

          ))}

          {/* EMPTY SEARCH */}

          {filteredConversations.length === 0 && (
            <div className="empty-search">

              <p>No conversations found</p>

            </div>
          )}

        </div>

      </section>


      {/* =====================================
          CENTER PANEL - CHAT
      ===================================== */}

      <section className="chat-panel">

        {/* CHAT HEADER */}

        <div className="chat-header">

          <div className="chat-user">

            <div className="conversation-avatar">

              {selectedConversation.name.charAt(0)}

            </div>

            <div>

              <strong>
                {selectedConversation.name}
              </strong>

              <span className="chat-status">

                {selectedConversation.online
                  ? "Online"
                  : "Offline"}

              </span>

            </div>

          </div>

          <div className="chat-actions">

            <button
              className="icon-button"
              onClick={handleCall}
              title="Call"
            >
              <Phone size={19} />
            </button>

            <button
              className="icon-button"
              title="More options"
            >
              <MoreVertical size={20} />
            </button>

          </div>

        </div>


        {/* MESSAGES */}

        <div className="messages">

          {selectedConversation.messages.map((message) => (

            <div
              key={message.id}
              className={`message ${message.type}`}
            >

              <p>
                {message.text}
              </p>

              <span>
                {message.time}
              </span>

            </div>

          ))}

        </div>


        {/* MESSAGE COMPOSER */}

        <div className="message-composer">

          {/* ATTACHMENT */}

          <button
            className="icon-button"
            onClick={handleAttachment}
            title="Attach file"
          >
            <Paperclip size={20} />
          </button>

          {/* MESSAGE INPUT */}

          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(event) =>
              setMessageText(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          {/* EMOJI */}

          <button
            className="icon-button"
            onClick={handleEmoji}
            title="Add emoji"
          >
            <Smile size={20} />
          </button>

          {/* SEND */}

          <button
            className="send-button"
            onClick={handleSendMessage}
            title="Send message"
          >
            <Send size={18} />
          </button>

        </div>

      </section>


      {/* =====================================
          RIGHT PANEL - CUSTOMER CRM
      ===================================== */}

      <section className="customer-panel">

        {/* HEADER */}

        <div className="customer-header">

          <h3>
            Customer Details
          </h3>

          <button className="icon-button">

            <MoreVertical size={20} />

          </button>

        </div>


        {/* PROFILE */}

        <div className="customer-profile">

          <div className="large-avatar">

            {selectedConversation.name.charAt(0)}

          </div>

          <h3>
            {selectedConversation.name}
          </h3>

          <span className="customer-status">

            {selectedConversation.online
              ? "Online"
              : "Offline"}

          </span>

        </div>


        {/* CUSTOMER INFORMATION */}

        <div className="customer-info">

          {/* COMPANY */}

          <div className="info-item">

            <strong>
              Company
            </strong>

            <span>
              {selectedConversation.company}
            </span>

          </div>


          {/* STATUS */}

          <div className="info-item">

            <strong>
              Status
            </strong>

            <span className="status-badge">

              {selectedConversation.tag}

            </span>

          </div>


          {/* OWNER */}

          <div className="info-item">

            <strong>
              Owner
            </strong>

            <span>
              {selectedConversation.owner}
            </span>

          </div>


          {/* PHONE */}

          <div className="info-item">

            <strong>
              Phone
            </strong>

            <div className="info-with-icon">

              <Phone size={15} />

              <span>
                {selectedConversation.phone}
              </span>

            </div>

          </div>


          {/* EMAIL */}

          <div className="info-item">

            <strong>
              Email
            </strong>

            <div className="info-with-icon">

              <Mail size={15} />

              <span>
                {selectedConversation.email}
              </span>

            </div>

          </div>


          {/* LOCATION */}

          <div className="info-item">

            <strong>
              Location
            </strong>

            <div className="info-with-icon">

              <MapPin size={15} />

              <span>
                {selectedConversation.location}
              </span>

            </div>

          </div>


          {/* LAST CONTACTED */}

          <div className="info-item">

            <strong>
              Last Contacted
            </strong>

            <span>
              {selectedConversation.lastContacted}
            </span>

          </div>


          {/* LEAD SOURCE */}

          <div className="info-item">

            <strong>
              Lead Source
            </strong>

            <span>
              {selectedConversation.leadSource}
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Inbox;
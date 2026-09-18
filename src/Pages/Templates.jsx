import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Copy,
  Edit,
  Eye,
  X,
  CheckCircle,
} from "lucide-react";

function Templates() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Welcome Message",
      content:
        "Hi {{customer_name}}, welcome to WAFlow! We are happy to have you with us.",
      status: "Approved",
      usage: 248,
    },
    {
      id: 2,
      name: "Pricing Information",
      content:
        "Hi {{customer_name}}, thank you for your interest. Here is our latest pricing information.",
      status: "Approved",
      usage: 186,
    },
    {
      id: 3,
      name: "Follow Up",
      content:
        "Hi {{customer_name}}, just checking in to see if you have any questions. We would be happy to help.",
      status: "Approved",
      usage: 124,
    },
    {
      id: 4,
      name: "Order Confirmation",
      content:
        "Hi {{customer_name}}, your order has been successfully confirmed. Thank you for choosing us!",
      status: "Approved",
      usage: 97,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [showPreview, setShowPreview] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [editingTemplate, setEditingTemplate] = useState(null);

  const [newName, setNewName] = useState("");

  const [newContent, setNewContent] = useState("");

  // --------------------------------
  // SEARCH
  // --------------------------------

  const filteredTemplates = templates.filter((template) => {
    const search = searchText.toLowerCase();

    return (
      template.name.toLowerCase().includes(search) ||
      template.content.toLowerCase().includes(search)
    );
  });

  // --------------------------------
  // PREVIEW
  // --------------------------------

  function handlePreview(template) {
    setSelectedTemplate(template);
    setShowPreview(true);
  }

  // --------------------------------
  // DUPLICATE
  // --------------------------------

  function handleDuplicate(template) {
    const duplicate = {
      ...template,
      id: Date.now(),
      name: `${template.name} Copy`,
      usage: 0,
    };

    setTemplates((previousTemplates) => [
      ...previousTemplates,
      duplicate,
    ]);
  }

  // --------------------------------
  // EDIT
  // --------------------------------

  function handleEdit(template) {
    setEditingTemplate(template);

    setNewName(template.name);

    setNewContent(template.content);

    setShowForm(true);
  }

  // --------------------------------
  // ADD TEMPLATE
  // --------------------------------

  function handleAddTemplate() {
    setEditingTemplate(null);

    setNewName("");

    setNewContent("");

    setShowForm(true);
  }

  // --------------------------------
  // SAVE TEMPLATE
  // --------------------------------

  function handleSaveTemplate() {
    if (
      newName.trim() === "" ||
      newContent.trim() === ""
    ) {
      alert("Please fill all fields.");

      return;
    }

    if (editingTemplate) {
      setTemplates((previousTemplates) =>
        previousTemplates.map((template) =>
          template.id === editingTemplate.id
            ? {
                ...template,
                name: newName,
                content: newContent,
              }
            : template
        )
      );
    } else {
      const newTemplate = {
        id: Date.now(),
        name: newName,
        content: newContent,
        status: "Approved",
        usage: 0,
      };

      setTemplates((previousTemplates) => [
        ...previousTemplates,
        newTemplate,
      ]);
    }

    setShowForm(false);

    setNewName("");

    setNewContent("");

    setEditingTemplate(null);
  }

  return (
    <div className="templates-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="templates-header">

        <div>
          <h2>Message Templates</h2>

          <p>
            Manage your WhatsApp message templates
          </p>
        </div>

        <button
          className="primary-button"
          onClick={handleAddTemplate}
        >
          <Plus size={18} />

          Create Template
        </button>

      </div>


      {/* =================================
          SEARCH
      ================================= */}

      <div className="templates-toolbar">

        <div className="template-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search templates..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />

        </div>

      </div>


      {/* =================================
          TEMPLATE GRID
      ================================= */}

      <div className="templates-grid">

        {filteredTemplates.map((template) => (

          <div
            className="template-card"
            key={template.id}
          >

            {/* CARD HEADER */}

            <div className="template-card-header">

              <div>

                <h3>
                  {template.name}
                </h3>

                <span className="approved-badge">

                  <CheckCircle size={13} />

                  {template.status}

                </span>

              </div>

              <button className="icon-button">

                <MoreVertical size={19} />

              </button>

            </div>


            {/* CONTENT */}

            <div className="template-content">

              <p>
                {template.content}
              </p>

            </div>


            {/* FOOTER */}

            <div className="template-footer">

              <div className="template-usage">

                <span>
                  Usage
                </span>

                <strong>
                  {template.usage}
                </strong>

              </div>

              <div className="template-actions">

                <button
                  onClick={() =>
                    handlePreview(template)
                  }
                  title="Preview"
                >
                  <Eye size={16} />

                  Preview
                </button>

                <button
                  onClick={() =>
                    handleEdit(template)
                  }
                  title="Edit"
                >
                  <Edit size={16} />

                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDuplicate(template)
                  }
                  title="Duplicate"
                >
                  <Copy size={16} />

                  Duplicate
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =================================
          EMPTY STATE
      ================================= */}

      {filteredTemplates.length === 0 && (

        <div className="template-empty">

          <h3>
            No templates found
          </h3>

          <p>
            Try another search term.
          </p>

        </div>

      )}


      {/* =================================
          PREVIEW MODAL
      ================================= */}

      {showPreview && selectedTemplate && (

        <div className="modal-overlay">

          <div className="template-modal">

            <div className="modal-header">

              <div>

                <h3>
                  Template Preview
                </h3>

                <p>
                  {selectedTemplate.name}
                </p>

              </div>

              <button
                className="icon-button"
                onClick={() =>
                  setShowPreview(false)
                }
              >
                <X size={20} />
              </button>

            </div>


            <div className="whatsapp-preview">

              <div className="preview-message">

                {selectedTemplate.content.replace(
                  "{{customer_name}}",
                  "Rahul"
                )}

              </div>

            </div>

            <button
              className="primary-button modal-close-button"
              onClick={() =>
                setShowPreview(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* =================================
          CREATE / EDIT MODAL
      ================================= */}

      {showForm && (

        <div className="modal-overlay">

          <div className="template-modal">

            <div className="modal-header">

              <div>

                <h3>
                  {editingTemplate
                    ? "Edit Template"
                    : "Create Template"}
                </h3>

                <p>
                  Add your WhatsApp message template
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

            <div className="template-form-group">

              <label>
                Template Name
              </label>

              <input
                type="text"
                placeholder="e.g. Welcome Message"
                value={newName}
                onChange={(event) =>
                  setNewName(event.target.value)
                }
              />

            </div>


            {/* CONTENT */}

            <div className="template-form-group">

              <label>
                Message Content
              </label>

              <textarea
                placeholder="Hi {{customer_name}}, welcome to WAFlow!"
                value={newContent}
                onChange={(event) =>
                  setNewContent(event.target.value)
                }
                rows="6"
              />

              <small>
                You can use {"{{customer_name}}"} as a
                customer variable.
              </small>

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
                onClick={handleSaveTemplate}
              >
                {editingTemplate
                  ? "Save Changes"
                  : "Create Template"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Templates;
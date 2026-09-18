import { useState } from "react";

function Automation() {
  const [workflowName, setWorkflowName] = useState(
    "Pricing Inquiry Workflow"
  );

  const [trigger, setTrigger] = useState("New WhatsApp Message");

  const [condition, setCondition] = useState(
    'Message contains "pricing"'
  );

  const [actions, setActions] = useState([
    "Send Pricing Template",
    "Assign to Sales",
    "Add Lead Tag",
  ]);

  const [showActionMenu, setShowActionMenu] = useState(false);
  
  function addAction(action) {
    setActions((previousActions) => [
      ...previousActions,
      action,
    ]);

    setShowActionMenu(false);
  }

  function deleteAction(index) {
    setActions((previousActions) =>
      previousActions.filter(
        (_, actionIndex) => actionIndex !== index
      )
    );
  }

  function handleSave() {
    alert("Workflow saved successfully!");
  }

  function handlePreview() {
    alert(
      `Workflow Preview:\n\n${trigger}\n↓\n${condition}\n↓\n${actions.join(
        "\n↓\n"
      )}`
    );
  }

  return (
    <div className="automation-page">

      {/* PAGE HEADER */}

      <div className="automation-heading">

        <div>
          <h2>Automation Builder</h2>

          <p>
            Create automated workflows for your WhatsApp conversations.
          </p>
        </div>

        <div className="automation-actions">

          <button
            className="secondary-button"
            onClick={handlePreview}
          >
            Preview
          </button>

          <button
            className="primary-button"
            onClick={handleSave}
          >
            Save Workflow
          </button>

        </div>

      </div>


      {/* WORKFLOW NAME */}

      <div className="workflow-card">

        <label>Workflow Name</label>

        <input
          type="text"
          value={workflowName}
          onChange={(event) =>
            setWorkflowName(event.target.value)
          }
          placeholder="Enter workflow name"
        />

      </div>


      {/* TRIGGER */}

      <div className="workflow-card">

        <div className="step-number">1</div>

        <div className="workflow-content">

          <div className="workflow-step-heading">
            <div>
              <h3>Trigger</h3>
              <p>Choose what starts this workflow.</p>
            </div>
          </div>

          <select
            value={trigger}
            onChange={(event) =>
              setTrigger(event.target.value)
            }
          >
            <option>New WhatsApp Message</option>
            <option>New Contact Created</option>
            <option>New Lead Generated</option>
            <option>Customer Replied</option>
          </select>

        </div>

      </div>


      {/* CONDITION */}

      <div className="workflow-card">

        <div className="step-number">2</div>

        <div className="workflow-content">

          <div>
            <h3>Condition</h3>

            <p>
              Define when the automation should continue.
            </p>
          </div>

          <select
            value={condition}
            onChange={(event) =>
              setCondition(event.target.value)
            }
          >
            <option>
              Message contains "pricing"
            </option>

            <option>
              Message contains "demo"
            </option>

            <option>
              Message contains "product"
            </option>

            <option>
              Contact status is "New Lead"
            </option>
          </select>

        </div>

      </div>


      {/* ACTIONS */}

      <div className="workflow-card">

        <div className="step-number">3</div>

        <div className="workflow-content">

          <div>
            <h3>Actions</h3>

            <p>
              Select what should happen automatically.
            </p>
          </div>


          <div className="actions-list">

            {actions.map((action, index) => (

              <div
                className="workflow-action"
                key={`${action}-${index}`}
              >

                <div className="action-left">

                  <span className="action-number">
                    {index + 1}
                  </span>

                  <span>{action}</span>

                </div>

                <button
                  className="delete-action"
                  onClick={() =>
                    deleteAction(index)
                  }
                  title="Delete action"
                >
                  ×
                </button>

              </div>

            ))}

          </div>


          {/* ADD ACTION */}

          <div className="add-action-wrapper">

            <button
              className="add-action-button"
              onClick={() =>
                setShowActionMenu(!showActionMenu)
              }
            >
              + Add Action
            </button>


            {showActionMenu && (

              <div className="action-menu">

                <button
                  onClick={() =>
                    addAction("Send WhatsApp Message")
                  }
                >
                  Send WhatsApp Message
                </button>

                <button
                  onClick={() =>
                    addAction("Send Template")
                  }
                >
                  Send Template
                </button>

                <button
                  onClick={() =>
                    addAction("Assign to Sales")
                  }
                >
                  Assign to Sales
                </button>

                <button
                  onClick={() =>
                    addAction("Add Lead Tag")
                  }
                >
                  Add Lead Tag
                </button>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* WORKFLOW SUMMARY */}

      <div className="workflow-summary">

        <h3>Workflow Summary</h3>

        <p>
          When a <strong>{trigger}</strong> is received,
          the workflow checks whether{" "}
          <strong>{condition}</strong>.
        </p>

        <p>
          If the condition matches,{" "}
          <strong>{actions.length} action(s)</strong>{" "}
          will be performed automatically.
        </p>

      </div>

    </div>
  );
}

export default Automation;
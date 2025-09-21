import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import surveyData from "../data/survey_cleaned.json";

const subPages = [
  {
    id: "survey",
    title: "Survey Question",
    icon: "📋",
    description: "Research survey questions and methodology",
  },
  {
    id: "data",
    title: "Raw Survey Data",
    icon: "📊",
    description: "Excel spreadsheet data from survey responses",
  },
  {
    id: "bibliography",
    title: "Annotated Bibliography",
    icon: "📚",
    description: "Academic summaries of key research sources",
  },
  {
    id: "report",
    title: "Research Report",
    icon: "📄",
    description: "Complete Research Report",
  },
];

const SurveyQuestionContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    style={{ padding: "30px", maxHeight: "600px", overflowY: "auto" }}
  >
    {/* Survey Header */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "30px",
        padding: "20px",
        background:
          "linear-gradient(135deg, rgba(129, 140, 248, 0.1), rgba(167, 139, 250, 0.05))",
        borderRadius: "12px",
        border: "1px solid rgba(129, 140, 248, 0.2)",
      }}
    >
      <h2
        style={{
          color: "#818cf8",
          marginBottom: "15px",
          fontSize: "1.8rem",
          fontWeight: 600,
        }}
      >
        Views on the Ethics of Weapons Use That Harm Civilians After War
      </h2>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "1.1rem",
          marginBottom: "15px",
        }}
      >
        This research survey help answer the question: "How ethical is it to use
        weapons in war that continue to harm civilians for generations after the
        conflict ends?"
      </p>
      <p
        style={{
          color: "#9ca3af",
          fontSize: "0.95rem",
          fontStyle: "italic",
        }}
      >
        All data collected in this survey will be kept anonymous, and no
        information will be shared outside of the research group.
      </p>
    </div>

    {/* Survey Questions */}
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      {/* Question 1 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          1. What is your age group?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Under 18</div>
          <div>• 18–24</div>
          <div>• 25–34</div>
          <div>• 35–44</div>
          <div>• 45–54</div>
          <div>• 55+</div>
        </div>
      </div>

      {/* Question 2 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          2. What is your current employment status?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• High school student</div>
          <div>• University/TAFE student - unemployed</div>
          <div>• University/TAFE student – employed part-time</div>
          <div>• Working full-time</div>
          <div>• Working part-time</div>
          <div>• Self-employed</div>
          <div>• Unemployed</div>
          <div>• Retired</div>
        </div>
      </div>

      {/* Question 3 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          3. What is your country of residence?
        </h4>
        <div
          style={{
            color: "#9ca3af",
            padding: "10px 15px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "6px",
            border: "1px dashed rgba(255, 255, 255, 0.2)",
          }}
        >
          [Open text field]
        </div>
      </div>

      {/* Question 4 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          4. On the below scale, indicate how familiar are you with nuclear,
          chemical, or biological weapons
        </h4>
        <p
          style={{ color: "#a78bfa", fontSize: "0.9rem", marginBottom: "10px" }}
        >
          – 5 = Totally ignorant, 0 = have read/heard something about it, + 5=
          I'm an expert
        </p>
        <div
          style={{
            color: "#9ca3af",
            fontFamily: "monospace",
            textAlign: "center",
            padding: "10px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "6px",
          }}
        >
          -5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+5
          <br />
          &lt;-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----&gt;
        </div>
      </div>

      {/* Question 5 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          5. Indicate your level of interest in topics like war, global
          politics, and/or ethics? (Likert Scale)
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Very strong interest</div>
          <div>• Strong interest</div>
          <div>• Some interest</div>
          <div>• Neutral</div>
          <div>• Some disinterest</div>
          <div>• Strong disinterest</div>
          <div>• Very strong disinterest</div>
        </div>
      </div>

      {/* Question 6 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          6. How aware are you of the long-term effects of nuclear, chemical, or
          biological weapons on civilians? (Rating scale: 1–5)
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>1 = Not aware at all</div>
          <div>5 = Very aware</div>
        </div>
      </div>

      {/* Question 7 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          7. In your opinion, how ethical is it to use weapons that can harm
          civilians for years after war ends? (Rating scale: 1–5)
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>1 = Completely unethical</div>
          <div>5 = Completely ethical</div>
        </div>
      </div>

      {/* Question 8 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          8. Which of these weapons do you think causes the most long-term harm
          to civilians?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Nuclear weapons</div>
          <div>• Chemical weapons</div>
          <div>• Biological weapons</div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Question 9 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          9. Which of the following is of greater ethical concern in war?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Ending the war quickly, regardless of human suffering</div>
          <div>
            • Avoiding long-term harm to civilians, even if it means a war drags
            on for years
          </div>
          <div>• A balance of both</div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Question 10 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          10. Would you support the use of a weapon if it caused long-term
          civilian suffering but ended the war faster?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Yes</div>
          <div>• No</div>
          <div>• Depends on the situation</div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Continue with remaining questions... */}

      {/* Question 11 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          11. Do you think banning countries from using weapons that have
          long-lasting negative impacts (more than one generation) is an
          effective way to protect civilians in war and beyond?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Yes, always</div>
          <div>• Yes, in most cases</div>
          <div>
            • It depends on the country being banned and whether they comply
          </div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Question 12 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          12. Indicate how strongly you agree with this statement:
        </h4>
        <p
          style={{
            color: "#a78bfa",
            fontSize: "1rem",
            marginBottom: "12px",
            fontStyle: "italic",
          }}
        >
          "Even if a weapon isn't used, just owning it for threat (deterrence)
          is unethical."
        </p>
        <p
          style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "10px" }}
        >
          (Rating scale: Strongly disagree – Strongly agree)
        </p>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Strongly disagree</div>
          <div>• Disagree</div>
          <div>• Neutral</div>
          <div>• Agree</div>
          <div>• Strongly agree</div>
        </div>
      </div>

      {/* Question 13 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          13. Why are some weapons seen as more unethical than others?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Indiscriminate harm</div>
          <div>• Prolonged suffering</div>
          <div>• Mass destruction</div>
          <div>• Lack of accountability</div>
          <div>• Violation of honor codes</div>
        </div>
      </div>

      {/* Question 14 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          14. Do you believe future generations should be considered when
          countries make decisions about war?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Yes</div>
          <div>• No</div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Question 15 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          15. Rank the following weapons based on how ethical you believe they
          are (1 = most ethical, 3 = most unethical):
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Nuclear weapons</div>
          <div>• Chemical weapons</div>
          <div>• Biological weapons</div>
        </div>
      </div>

      {/* Question 16 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          16. How much do you agree with the following statement?
        </h4>
        <p
          style={{
            color: "#a78bfa",
            fontSize: "1rem",
            marginBottom: "12px",
            fontStyle: "italic",
          }}
        >
          "Using weapons that harm civilians after war is never justified, even
          if it ends the war faster."
        </p>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Strongly agree</div>
          <div>• Agree</div>
          <div>• Neutral</div>
          <div>• Disagree</div>
          <div>• Strongly disagree</div>
        </div>
      </div>

      {/* Question 17 - Table Format */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          17. Rate how harmful you believe each weapon type is to future
          generations:
        </h4>
        <p
          style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "15px" }}
        >
          (Scale: Not harmful – Slightly – Moderately – Very – Extremely)
        </p>

        {/* Table */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "8px",
            padding: "15px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "10px",
              marginBottom: "10px",
              color: "#a78bfa",
              fontWeight: "600",
              fontSize: "0.9rem",
              borderBottom: "1px solid rgba(167, 139, 250, 0.3)",
              paddingBottom: "8px",
            }}
          >
            <div>Weapon Type</div>
            <div style={{ textAlign: "center" }}>Not harmful</div>
            <div style={{ textAlign: "center" }}>Slightly</div>
            <div style={{ textAlign: "center" }}>Moderately</div>
            <div style={{ textAlign: "center" }}>Very</div>
            <div style={{ textAlign: "center" }}>Extremely</div>
          </div>

          {/* Nuclear Weapons Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "10px",
              marginBottom: "8px",
              color: "#9ca3af",
              fontSize: "0.9rem",
              alignItems: "center",
            }}
          >
            <div>Nuclear weapons</div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
          </div>

          {/* Chemical Weapons Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "10px",
              marginBottom: "8px",
              color: "#9ca3af",
              fontSize: "0.9rem",
              alignItems: "center",
            }}
          >
            <div>Chemical weapons</div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
          </div>

          {/* Biological Weapons Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "10px",
              color: "#9ca3af",
              fontSize: "0.9rem",
              alignItems: "center",
            }}
          >
            <div>Biological weapons</div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
            <div
              style={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "4px",
                borderRadius: "4px",
                border: "1px dashed rgba(255, 255, 255, 0.2)",
              }}
            >
              □
            </div>
          </div>
        </div>
      </div>

      {/* Question 18 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          18. Do you believe most people understand how dangerous these weapons
          are long-term?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• Yes</div>
          <div>• No</div>
          <div>• Not sure</div>
        </div>
      </div>

      {/* Question 19 */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h4
          style={{ color: "#e5e7eb", marginBottom: "12px", fontSize: "1.1rem" }}
        >
          19. Rank the following global agreements from most effective at
          reducing weapon use that harms civilians (top) to least effective
          (bottom)?
        </h4>
        <div
          style={{ color: "#9ca3af", lineHeight: "1.8", paddingLeft: "15px" }}
        >
          <div>• I don't know</div>
          <div>• Arms Trade Treaty</div>
          <div>• Geneva Convention</div>
          <div>• Chemical Weapons Convention</div>
          <div>• Treaty on the Prohibition of Nuclear Weapons</div>
          <div>• Biological Weapons Convention</div>
          <div>• Other / Not listed</div>
        </div>
      </div>

      <div
        style={{
          background: "rgba(129, 140, 248, 0.1)",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid rgba(129, 140, 248, 0.3)",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <h4 style={{ color: "#818cf8", marginBottom: "10px" }}>
          Survey Complete
        </h4>
        <p style={{ color: "#a78bfa", margin: 0, fontSize: "0.95rem" }}>
          Thank you for participating in this research on the ethics of weapons
          use in warfare.
        </p>
      </div>
    </div>
  </motion.div>
);

const RawSurveyDataContent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 1000,
              padding: "20px",
              overflowY: "auto",
            }}
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                minHeight: "calc(100vh - 40px)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                  background: "rgba(239, 68, 68, 0.2)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "8px",
                  color: "#ef4444",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  zIndex: 10,
                }}
              >
                ✕ Close Fullscreen
              </button>

              {/* Fullscreen Content */}
              <div style={{ padding: "30px" }}>
                <FullscreenDataView />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ padding: "30px", maxHeight: "600px", overflowY: "auto" }}
      >
        {/* Data Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            padding: "20px",
            background:
              "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))",
            borderRadius: "12px",
            border: "1px solid rgba(34, 197, 94, 0.2)",
          }}
        >
          <h2
            style={{
              color: "#22c55e",
              marginBottom: "15px",
              fontSize: "1.8rem",
              fontWeight: 600,
            }}
          >
            📊 Raw Survey Data
          </h2>
          <p
            style={{
              color: "#e5e7eb",
              lineHeight: "1.6",
              fontSize: "1.1rem",
              marginBottom: "15px",
            }}
          >
            Complete dataset from all 19 survey questions with participant
            responses
          </p>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.95rem",
              fontStyle: "italic",
            }}
          >
            Data compiled from anonymous survey responses (N ={" "}
            {surveyData.length} sample size)
          </p>
        </div>

        {/* Excel Table Simulation */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Excel Header Bar */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.15))",
              padding: "12px 20px",
              borderBottom: "1px solid rgba(34, 197, 94, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>📊</span>
              <span style={{ color: "#e5e7eb", fontWeight: 600 }}>
                Views on the Ethics of Weapons Use That Harm Civilians After
                War.xlsx
              </span>
            </div>

            {/* Expand Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFullscreen(true)}
              style={{
                background: "rgba(34, 197, 94, 0.2)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: "6px",
                color: "#22c55e",
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: "0.8rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>⛶</span> Fullscreen
            </motion.button>
          </div>

          {/* Scrollable Table Container */}
          <div
            style={{
              overflowX: "auto",
              overflowY: "auto",
              maxHeight: "500px",
              background: "rgba(255, 255, 255, 0.02)",
            }}
          >
            {surveyData.length > 0 &&
              (() => {
                // Get all column names from the first row (excluding ID which we'll handle separately)
                const allColumns = Object.keys(surveyData[0]).filter(
                  (key) => key !== "ID"
                );
                const totalColumns = allColumns.length + 1; // +1 for ID column

                // Create dynamic grid template based on number of columns
                const gridTemplate = `60px ${"120px ".repeat(
                  totalColumns - 1
                )}`.trim();

                return (
                  <>
                    {/* Dynamic Column Headers */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: gridTemplate,
                        background: "rgba(34, 197, 94, 0.1)",
                        borderBottom: "1px solid rgba(34, 197, 94, 0.2)",
                        fontSize: "0.7rem",
                        top: 0,
                        zIndex: 10,
                        minWidth: `${totalColumns * 120}px`,
                      }}
                    >
                      {/* ID Column Header */}
                      <div
                        style={{
                          padding: "8px 4px",
                          color: "#22c55e",
                          fontWeight: 600,
                          borderRight: "1px solid rgba(34, 197, 94, 0.2)",
                          textAlign: "center",
                        }}
                      >
                        ID
                      </div>

                      {/* All Other Column Headers */}
                      {allColumns.map((columnName, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "8px 4px",
                            color: "#22c55e",
                            fontWeight: 600,
                            borderRight:
                              index < allColumns.length - 1
                                ? "1px solid rgba(34, 197, 94, 0.2)"
                                : "none",
                            fontSize: "0.65rem",
                            lineHeight: "1.2",
                            wordBreak: "break-word",
                          }}
                        >
                          {/* Shorten long column names for display */}
                          {columnName.length > 40
                            ? `${columnName.substring(0, 37)}...`
                            : columnName}
                        </div>
                      ))}
                    </div>

                    {/* Dynamic Data Rows */}
                    {surveyData.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        style={{
                          display: "grid",
                          gridTemplateColumns: gridTemplate,
                          borderBottom:
                            rowIndex < surveyData.length - 1
                              ? "1px solid rgba(255, 255, 255, 0.1)"
                              : "none",
                          background:
                            rowIndex % 2 === 0
                              ? "rgba(255, 255, 255, 0.02)"
                              : "transparent",
                          fontSize: "0.7rem",
                          minWidth: `${totalColumns * 120}px`,
                        }}
                      >
                        {/* ID Column */}
                        <div
                          style={{
                            padding: "6px 4px",
                            color: "#a78bfa",
                            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            textAlign: "center",
                            fontFamily: "monospace",
                            fontWeight: 600,
                          }}
                        >
                          {String(row.ID).padStart(3, "0")}
                        </div>

                        {/* All Other Data Columns */}
                        {allColumns.map((columnName, colIndex) => {
                          const value = row[columnName];
                          const isNumeric =
                            !isNaN(value) &&
                            !isNaN(parseFloat(value)) &&
                            value !== null &&
                            value !== "";

                          return (
                            <div
                              key={colIndex}
                              style={{
                                padding: "6px 4px",
                                color: isNumeric ? "#22c55e" : "#e5e7eb",
                                borderRight:
                                  colIndex < allColumns.length - 1
                                    ? "1px solid rgba(255, 255, 255, 0.1)"
                                    : "none",
                                textAlign: isNumeric ? "center" : "left",
                                fontFamily: isNumeric ? "monospace" : "inherit",
                                fontSize: "0.65rem",
                                lineHeight: "1.3",
                                wordBreak: "break-word",
                              }}
                            >
                              {value === null ||
                              value === undefined ||
                              value === "NaN"
                                ? "—"
                                : String(value)}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </>
                );
              })()}
          </div>
        </div>

        {/* Data Summary Stats */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            marginTop: "25px",
          }}
        >
          <h4 style={{ color: "#22c55e", marginBottom: "15px" }}>
            Dataset Overview
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              color: "#e5e7eb",
            }}
          >
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Total Responses
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                N = {surveyData.length}
              </div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Questions
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                19
              </div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Variables
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                25+
              </div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Age Range
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                18-54
              </div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Countries
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                8+
              </div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                Primary Age Group
              </div>
              <div
                style={{
                  color: "#22c55e",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                18-24 (95%)
              </div>
            </div>
          </div>

          {/* Key Demographics */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "15px",
              borderTop: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <h5
              style={{
                color: "#22c55e",
                marginBottom: "10px",
                fontSize: "1rem",
              }}
            >
              Key Demographics (Sample)
            </h5>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "10px",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ color: "#e5e7eb" }}>
                <span style={{ color: "#9ca3af" }}>Primary Locations:</span>{" "}
                Vietnam, Australia, Mongolia, Korea, UK, China, Thailand,
                Myanmar
              </div>
              <div style={{ color: "#e5e7eb" }}>
                <span style={{ color: "#9ca3af" }}>Employment:</span>{" "}
                University/TAFE Students (majority)
              </div>
              <div style={{ color: "#e5e7eb" }}>
                <span style={{ color: "#9ca3af" }}>Response Rate:</span>{" "}
                Complete responses across all 19 questions
              </div>
              <div style={{ color: "#e5e7eb" }}>
                <span style={{ color: "#9ca3af" }}>Data Type:</span> Likert
                scales, multiple choice, open text responses
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Fullscreen Data View Component
const FullscreenDataView = () => (
  <div>
    {/* Fullscreen Excel Table */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        height: "calc(100vh - 200px)",
      }}
    >
      {/* Excel Header Bar */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.15))",
          padding: "15px 25px",
          borderBottom: "1px solid rgba(34, 197, 94, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span style={{ color: "#22c55e", fontSize: "1.4rem" }}>📊</span>
        <span style={{ color: "#e5e7eb", fontWeight: 600, fontSize: "1.1rem" }}>
          Views on the Ethics of Weapons Use That Harm Civilians After War.xlsx
        </span>
      </div>

      {/* Fullscreen Scrollable Table Container */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "auto",
          height: "calc(100% - 70px)",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        {surveyData.length > 0 &&
          (() => {
            // Get all column names from the first row (excluding ID which we'll handle separately)
            const allColumns = Object.keys(surveyData[0]).filter(
              (key) => key !== "ID"
            );
            const totalColumns = allColumns.length + 1; // +1 for ID column

            // Create dynamic grid template based on number of columns - larger columns for fullscreen
            const gridTemplate = `80px ${"150px ".repeat(
              totalColumns - 1
            )}`.trim();

            return (
              <>
                {/* Dynamic Column Headers */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: gridTemplate,
                    background: "rgba(34, 197, 94, 0.15)",
                    borderBottom: "2px solid rgba(34, 197, 94, 0.3)",
                    fontSize: "0.85rem",
                    top: 0,
                    zIndex: 10,
                    minWidth: `${totalColumns * 150}px`,
                  }}
                >
                  {/* ID Column Header */}
                  <div
                    style={{
                      padding: "12px 8px",
                      color: "#22c55e",
                      fontWeight: 700,
                      borderRight: "1px solid rgba(34, 197, 94, 0.3)",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    ID
                  </div>

                  {/* All Other Column Headers */}
                  {allColumns.map((columnName, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "12px 8px",
                        color: "#22c55e",
                        fontWeight: 700,
                        borderRight:
                          index < allColumns.length - 1
                            ? "1px solid rgba(34, 197, 94, 0.3)"
                            : "none",
                        fontSize: "0.8rem",
                        lineHeight: "1.3",
                        wordBreak: "break-word",
                      }}
                    >
                      {/* Show more text in fullscreen */}
                      {columnName.length > 60
                        ? `${columnName.substring(0, 57)}...`
                        : columnName}
                    </div>
                  ))}
                </div>

                {/* Dynamic Data Rows */}
                {surveyData.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    style={{
                      display: "grid",
                      gridTemplateColumns: gridTemplate,
                      borderBottom:
                        rowIndex < surveyData.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.1)"
                          : "none",
                      background:
                        rowIndex % 2 === 0
                          ? "rgba(255, 255, 255, 0.03)"
                          : "rgba(255, 255, 255, 0.01)",
                      fontSize: "0.8rem",
                      minWidth: `${totalColumns * 150}px`,
                    }}
                  >
                    {/* ID Column */}
                    <div
                      style={{
                        padding: "10px 8px",
                        color: "#a78bfa",
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                        textAlign: "center",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      {String(row.ID).padStart(3, "0")}
                    </div>

                    {/* All Other Data Columns */}
                    {allColumns.map((columnName, colIndex) => {
                      const value = row[columnName];
                      const isNumeric =
                        !isNaN(value) &&
                        !isNaN(parseFloat(value)) &&
                        value !== null &&
                        value !== "";

                      return (
                        <div
                          key={colIndex}
                          style={{
                            padding: "10px 8px",
                            color: isNumeric ? "#22c55e" : "#e5e7eb",
                            borderRight:
                              colIndex < allColumns.length - 1
                                ? "1px solid rgba(255, 255, 255, 0.1)"
                                : "none",
                            textAlign: isNumeric ? "center" : "left",
                            fontFamily: isNumeric ? "monospace" : "inherit",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            wordBreak: "break-word",
                            fontWeight: isNumeric ? 600 : 400,
                          }}
                        >
                          {value === null ||
                          value === undefined ||
                          value === "NaN"
                            ? "—"
                            : String(value)}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </>
            );
          })()}
      </div>
    </div>
  </div>
);

const BibliographyContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    style={{ padding: "30px", maxHeight: "600px", overflowY: "auto" }}
  >
    {/* Bibliography Header */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "30px",
        padding: "20px",
        background:
          "linear-gradient(135deg, rgba(129, 140, 248, 0.1), rgba(167, 139, 250, 0.05))",
        borderRadius: "12px",
        border: "1px solid rgba(129, 140, 248, 0.2)",
      }}
    >
      <h2
        style={{
          color: "#818cf8",
          marginBottom: "15px",
          fontSize: "1.8rem",
          fontWeight: 600,
        }}
      >
        📚 ANNOTATED BIBLIOGRAPHY
      </h2>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "1.1rem",
          marginBottom: "10px",
        }}
      >
        Peer-reviewed academic articles that support the research topic
        regarding the ethical issue of nuclear, chemical, and biological weapons
        on civilian populations.
      </p>
    </div>

    {/* Reference 1: Chernobyl */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "Evidence from the Chernobyl Nuclear Accident"
      </h4>
      <p
        style={{
          color: "#9ca3af",
          fontSize: "0.9rem",
          marginBottom: "5px",
          fontStyle: "italic",
        }}
      >
        M. Yemelyanau, A. Amialchuk, & M. M. Ali
      </p>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        Yemelyanau, M., Amialchuk, A., & Ali, M. M. (2011). Evidence from the
        Chernobyl nuclear accident: The effect on health, education, and labor
        market outcomes in Belarus. Journal of Labor Research, 33(1), 1–20.
        https://doi.org/10.1007/s12122-011-9122-9
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The article Evidence from the Chernobyl Nuclear Accident, published in
        the Journal of Labor Research (2011) by Yemelyanau, Amialchuk, and Ali,
        investigates the long-term consequences of the 1986 Chernobyl disaster
        in Belarus. The authors assess how exposure to radiation during
        childhood has shaped adult outcomes in health, education, and
        employment. They report that those who lived in more contaminated areas
        suffer poorer health, lower academic achievement, reduced job
        opportunities, and lower lifetime incomes compared to the less exposed
        peers.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To prove these findings, the authors use national survey data combined
        with radiation exposure measurements, applying statistical controls to
        isolate the disaster's impact. Their analysis reveals that nuclear
        accidents can produce lifelong socioeconomic harm, continue disadvantage
        societal productivity. The study underscores the disproportionate burden
        tolerated by civilians, particularly children, who face enduring effects
        from an event they could neither anticipate nor prevent.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, the authors argue that Chernobyl exemplifies how nuclear
        incidents impose intergenerational harm, creating ethical obligations
        for prevention, protection, and sustained support for affected
        communities.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 167
      </p>
    </div>

    {/* Reference 2: Fukushima */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "Fukushima Accident"
      </h4>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        The Editors of Encyclopaedia Britannica. (2025, July 28). Fukushima
        accident [Encyclopedia entry]. Encyclopaedia Britannica.
        https://www.britannica.com/event/Fukushima-accident
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The entry Fukushima Accident, published by the Editors of Encyclopaedia
        Britannica (2025), provides a clear insight the nuclear disaster that
        followed the 2011 earthquake and tsunami in Japan. It describes how the
        natural disasters can resulted in reactor meltdowns, hydrogen
        explosions, and the release of radioactive materials, leading to the
        evacuation of hundreds of thousands of residents. The article also
        reviews the technical failures, lacks of safety, and emergency response
        challenges that compounded the crisis.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To give context, the entry explains the environmental contamination of
        land and sea, the disruption to local communities, and the ongoing
        difficulties of decontamination and reactor decommissioning. It
        highlights that the disaster's impact extends far beyond immediate
        health risks, influencing policy debates and public attitudes toward
        nuclear power worldwide.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, the editors highlight Fukushima as a reminder of the
        potential risks in nuclear industry, stressing the ethical
        responsibility of governments and operators to effectively safeguards
        the both present and future populations.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 157
      </p>
    </div>

    {/* Reference 3: Intergenerational Issues */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "Intergenerational Issues Regarding Nuclear Power, Nuclear Waste, and
        Nuclear Weapons"
      </h4>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        Ahearne, J. F. (2000). Intergenerational issues regarding nuclear power,
        nuclear waste, and nuclear weapons. Risk Analysis, 20(6), 763–770.
        https://doi.org/10.1111/0272-4332.206070
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The article Intergenerational Issues Regarding Nuclear Power, Nuclear
        Waste, and Nuclear Weapons, published in Risk Analysis (2000) by policy
        analyst J. F. Ahearne, examines the ethical and policy challenges
        surrounding nuclear technology when its consequences extend across
        multiple generations. Ahearne addresses how present-day decisions on
        nuclear energy production, waste disposal, and weapons development
        impose risks and obligations on future populations who have no voice in
        these choices. He emphasises the long-term hazards of radioactive waste
        management, the enduring danger posed by nuclear arsenals, and the
        environmental burdens left for successors.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To illustrate his concerns, Ahearne discusses the complexity of safely
        storing high-level waste for thousands of years, the potential political
        instability that may compromise secure storage, and the risk of future
        misuse of nuclear materials. He frames these problems in moral terms,
        highlighting the duty of current societies to act with foresight and
        minimise harm to those yet to be born.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, Ahearne argues that the intergenerational nature of
        nuclear risk demands ethical governance that balances present needs with
        long-term responsibility, ensuring that the pursuit of energy and
        security does not create an unjust legacy of danger for future
        generations.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 191
      </p>
    </div>

    {/* Reference 4: Just and Unjust Nuclear Deterrence */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "Just and Unjust Nuclear Deterrence"
      </h4>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        Sagan, S. D. (2023). Just and Unjust Nuclear Deterrence. Ethics &
        International Affairs, 37(1), 19–28.
        https://doi.org/10.1017/s0892679423000035
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The article Just and Unjust Nuclear Deterrence, published in Ethics &
        International Affairs (Spring 2023) written by Stanford political
        scientist Scott D. Sagan. He questions whether, under Just War Theory
        principles, there can ever be any valid justification for having
        suffered nuclear deterrence forces. He points out that although nuclear
        use is put forward in order to prevent war, it contradicts the principle
        of discrimination, and even if never actually carried out, as a
        potential source of mass civilian harm that inherently risks great
        numbers of lives.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To illustrate his thesis, Sagan presents an agenda for "just deterrence"
        with ten points in all. These include avoiding targeting civilians or
        using nuclear threats where conventional weaponry would suffice;
        rejecting retaliatory threats against civilians; and moving in good
        faith toward eventual disarmament, all grounded in just war ethics. He
        contextualises these proposals within Cold War debates and current
        geopolitical dynamics, highlighting the moral paradox that the usability
        required for deterrence carries unacceptable moral risks.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, Sagan contends that either possessing nuclear weapons or
        threatening to use them creates profound ethical issues and that genuine
        deterrence policy must aim to eliminate civilian harm while adhering to
        international moral norms.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 196
      </p>
    </div>

    {/* Reference 5: Devastating Effects */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "The Devastating Effects of Nuclear Weapons"
      </h4>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        Wolfson, R., & Dalnoki-Veress, F. (2022). The devastating effects of
        nuclear weapons. The MIT Press Reader.
        https://thereader.mitpress.mit.edu/devastating-effects-of-nuclear-weapons-war
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The article The Devastating Effects of Nuclear Weapons, published in The
        MIT Press Reader (2022) by Richard Wolfson and Ferenc Dalnoki-Veress,
        examines the destructive power and long-term humanitarian consequences
        of nuclear arms. The authors describe how a detonation produces intense
        heat, massive shockwaves, and lethal radiation, followed by persistent
        fallout that damages ecosystems and human health for generations.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To expand on these impacts, they reference historical data from
        Hiroshima and Nagasaki alongside scientific modelling of potential
        future conflicts. They argue that nuclear weapons are inherently
        indiscriminate, making no distinction between military and civilian
        targets, and thus fundamentally violate humanitarian principles. The
        discussion also addresses global climatic effects, such as temperature
        drops and food shortages, that could follow even a limited nuclear
        exchange.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, Wolfson and Dalnoki-Veress contend that the scale,
        persistence, and indiscriminate nature of nuclear weapons' harm make
        their possession and potential use morally indefensible. They call for
        urgent international efforts toward disarmament to eliminate the risks
        these weapons pose to present and future generations.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 167
      </p>
    </div>

    {/* Reference 6: Nuclear War Video */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#e5e7eb",
          marginBottom: "15px",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        "What happens AFTER nuclear war?"
      </h4>
      <p
        style={{
          color: "#a78bfa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          fontWeight: 600,
        }}
      >
        Reference:
      </p>
      <p
        style={{
          color: "#60a5fa",
          fontSize: "0.85rem",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        Kurzgesagt – In a Nutshell. (2024, February 20). What happens AFTER
        nuclear war? [Video]. YouTube.
        https://www.youtube.com/watch?v=LrIRuqr_Ozg
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        The video What Happens AFTER Nuclear War?, produced by Kurzgesagt – In a
        Nutshell (2024), explores the scientific and humanitarian consequences
        of nuclear conflict. It explains the immediate effects of detonations,
        including intense heat, shockwaves, and radiation sickness, before
        focusing on the long-term crises that follow. These include radioactive
        fallout contaminating land and water, agricultural collapse,
        infrastructure breakdown, and potential "nuclear winter" conditions
        caused by atmospheric soot blocking sunlight.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "15px",
        }}
      >
        To clarify these scenarios, the video uses detailed animation to depict
        how disrupted ecosystems and failed food supplies would trigger famine,
        disease, and social collapse. It emphasises that even a limited nuclear
        exchange could leave contaminated environments uninhabitable for
        centuries, affecting countless future generations.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.6",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        In conclusion, the producers argue that the sheer scale and persistence
        of nuclear war's consequences make it incompatible with any ethical
        justification. They stress that preventing such a conflict is not only a
        political imperative but a moral duty to safeguard human survival and
        the planet's ecological stability.
      </p>
      <p style={{ color: "#9ca3af", fontSize: "0.8rem", fontStyle: "italic" }}>
        Word count: 160
      </p>
    </div>
  </motion.div>
);

const ReportContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    style={{ padding: "20px" }}
  >
    <h2
      style={{
        color: "#818cf8",
        marginBottom: "15px",
        fontSize: "2rem",
        fontWeight: 700,
      }}
    >
      📄 Research Report: The Ethics of Weapons That Harm Civilians After War
    </h2>

    {/* Abstract */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        Abstract
      </h4>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        This report investigates the ethical legitimacy of using nuclear,
        chemical, and biological weapons in war, with emphasize on their
        long-term impact on civilians and future generations. Multiple
        approaches were applied to assist this study, primary data were
        collected through a survey of 73 participants across different age
        groups and countries, while secondary data were drawn from academic
        articles taken from databases, case studies such as the Chernobyl
        nuclear disaster, and international law reviews on weapons conventions.
        The findings reveal strong public concern that these weapons are
        unethical, with nuclear weapons ranked as the most harmful due to their
        indiscriminate and prolonged effects, chemical weapons associated with
        chronic injury and psychological disorders, and biological weapons
        viewed as the least ethical because of their uncontrollable spread and
        violation of medical ethics. Researchers confirm these perceptions,
        showing that radiation reduces educational and employment outcomes for
        exposed children, chemical agents such as sulphur mustard cause lifelong
        respiratory and skin diseases, and biological weapons programs like
        Japan’s Unit 731 inflicted epidemics on civilians. The report concludes
        that such weapons violate humanitarian principles of distinction and
        proportionality, as well as the moral obligation to protect future
        generations. Furthermore, suggestions include stronger enforcement of
        the Treaty on the Prohibition of Nuclear Weapons, the Chemical Weapons
        Convention and the Biological Weapons Convention. It also recommends
        better verification and compliance, sustained support for victims and
        environmental recovery, long term health monitoring in affected
        communities, and war decisions that put the protection of future
        generations first.
      </p>
    </div>

    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        1. Introduction
      </h4>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        1.1 Background
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        For people in the age of war, innovating great weapons like nuclear and
        chemical bombs was a saviour, bringing glorious victory to their
        country. However, these are not only just killing tools causing mass
        destruction during the conflict, but also continue to affect civilian
        populations for decades after. This long-lasting devastation raises
        fundamental ethical concerns about the justification for their use. Even
        without the presence of warfare, the impact of a nuclear incident is
        still there. Some great examples, including the Fukushima Daiichi and
        Chernobyl nuclear disasters, have shown that radioactive contamination
        can cause generational health damage, reducing education outcomes and
        labour opportunities for decades in nearby regions (Yemelyanau,
        Amialchuk & Ali, 2011). Similarly, the Vietnamese have suffered Agent
        Orange during the resistance war against America, resulting in
        widespread birth defects, cancers, and other persistent health problems,
        yet still have shown that radioactive contamination can cause
        generational health damage, reducing education outcomes and labour
        opportunities for decades in nearby regions (Yemelyanau, Amialchuk &
        Ali, 2011). Similarly, the Vietnamese have suffered Agent Orange during
        the resistance war against America, resulting in widespread birth
        defects, cancers, and other persistent health problems, which still
        affect present generations later (Chat History, 2024).
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        While nuclear and chemical weapons work in different ways, they both
        break key ethical principles that violate the human rights of vulnerable
        civilians. Chemical agents such as sulphur mustard and sarin do not end
        when the battle ends. They leave survivors with chronic respiratory,
        dermatological and neurological injury, and contaminated environments
        that keep harming families long after the ceasefire (Volans &
        Karalliedde, 2002). Kelle (2013) also argues that the slow progress of
        international enforcement under the Chemical Weapons Convention (CWC)
        continues to leave civilians vulnerable. At the same time, biological
        weapons using pathogens or toxins like anthrax, plague or smallpox have
        a troubling history of research, testing and occasional alleged use,
        which is why public health preparedness and prevention are emphasised
        today (Leitenberg, 2001; Roffey et al., 2002; Carus, 2015). These
        ethical dilemmas have sparked global debate over whether such weapons
        should ever be justified, especially when the long-term human cost may
        exceed their strategic military value.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Kurzgesagt (2024) explores the post-nuclear reality by suggesting that
        even after a war ends, radiation, societal collapse, and psychological
        trauma may persist for centuries. Similarly, Warographics (2024) and
        other explainers on biological warfare demonstrate that nuclear,
        chemical and biological methods cause both targeted and indiscriminate
        harm to ecosystems and human populations, challenging any claim to
        ethical legitimacy. Together, these perspectives emphasize the enduring
        moral responsibility associated with the decision to deploy weapons
        whose effects outlast the conflict itself.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        1.2 Scope
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        This report focuses specifically on the intergenerational and civilian
        impacts of nuclear, chemical and biological weapons used in war. It will
        analyse the physical, psychological, and social consequences using
        evidence from major events such as the Chernobyl disaster and Agent
        Orange, supported by both primary and secondary research, which consists
        of collected surveys, peer-reviewed articles and academic videos. The
        report is divided into four sections, with the findings presenting key
        data from literature and media. The discussion will explore ethical
        arguments and real-world consequences. The conclusion will summarise the
        core insights. Finally, the recommendations will be proposed for ethical
        policy responses and future prevention.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        1.3 Purpose
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        The purpose of this report is to evaluate the ethical justification of
        using nuclear, chemical and biological weapons in warfare, particularly
        in terms of their long-lasting effects on civilian populations and
        future generations.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        1.4 Methodology
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The information in this report is derived from both primary and
        secondary research.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        For primary data, a survey was conducted to gather public views on the
        ethics of using weapons in war that cause long-term harm to civilians
        beyond the end of the conflict (see Appendix A). The survey collected
        responses from individuals aged under 18 to over 65, representing
        various employment statuses and nationalities, including Australia, the
        United Kingdom, Mongolia, and India. Questions covered topics such as
        awareness of the dangers of nuclear, chemical, and biological weapons;
        ethical stances on deterrence; support for bans on long-term-impact
        weapons; and prioritisation of wartime decisions. The survey was
        distributed via online platforms and personal networks, remaining open
        for 4 weeks, and received 73 responses in total, offering a diverse
        range of perspectives for analysis.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Secondary information was also gathered from peer-reviewed journal
        articles, academic books, and credible media sources such as Kurzgesagt
        (2024), Warographics (2024) and Chat History (2024). Databases such as
        EBSCOhost and ProQuest were used to access scholarly material on
        nuclear, chemical and biological weapons. Selection emphasised relevance
        to intergenerational harm, methodological transparency, and alignment
        with international humanitarian law and ethics. Key works included
        Yemelyanau et al. (2011), Kelle (2013) and Leitenberg (2001). These
        secondary sources contributed additional context, historical cases,
        legal frameworks, and expert opinions to support and validate the
        primary data findings.
      </p>
    </div>

    {/* Nuclear Weapons */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        2. Nuclear Weapons
      </h4>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        2.1 Findings
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The bar chart demonstrates the main reasons respondents believe nuclear
        weapons cause the most long-term harm (see Figure 1 above). Overall,
        respondents perceive nuclear weapons with lasting, indiscriminate harm
        and rank them as the top long-term threat. In Figure 1, only a few
        selected “lack of accountability” and “violation of honour codes,” so
        these are minor reasons. Meanwhile, “Prolonged suffering” is the single
        largest category, accounting for about one-half of all choices, followed
        by “Indiscriminate harm”, which comprises about one-third of responses,
        indicating concern for civilians. Moreover, about half of the
        respondents chose nuclear weapons as the most harmful in the long term,
        with chemical weapons at around one-quarter and biological weapons at
        about one-fifth.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The horizontal bar chart summarises ethical views related to nuclear use
        (see Figure 2 above). Overall, the group shows strong caution about
        decisions that risk intergenerational harm. Nearly everyone agrees that
        governments should consider future generations when making decisions
        about war. On the question of deterrence, more respondents agreed than
        disagreed that mere possession is unethical, but a large Neutral group
        (around one-quarter) shows that uncertainty remains. On the question of
        using a weapon that could end a war quickly but cause long-term civilian
        suffering, most respondents rejected the trade-off, with only a small
        minority supporting it. Overall, respondents expect leaders to
        prioritise future generations, see possession as risky for many, and
        oppose short-term solutions that lead to prolonged civilian harm.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        2.2 Analysis
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The findings indicate that people fear nuclear weapons because of their
        long-term, indiscriminate harm and because they want governments to
        consider future generations in war decisions. This aligns with evidence
        from Chernobyl. A study using Belarusian data found that children
        exposed to radiation had worse adult health, were less likely to finish
        university, less likely to be employed, and earned lower wages, with men
        in the most contaminated regions facing a wage penalty of nearly ten per
        cent (Yemelyanau et al., 2011). This supports the survey pattern, where
        many respondents emphasised prolonged suffering and indiscriminate harm.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Ethical issues across generations also feature strongly. Ahearne (2000)
        describes nuclear technology as a “legacy problem” and argues that
        people should leave conditions a little better for those who come after
        them. This helps explain why nearly all respondents expect governments
        to consider future generations and why they reject short-term victories
        that result in long-term civilian suffering.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The most divided survey item was deterrence. Some saw possession itself
        as a threat, while many others were undecided. In order to explain,
        Sagan (2023) proposes a more just form of deterrence that avoids threats
        against cities and focuses instead on military targets. He also stresses
        that states should work in good faith toward disarmament so that
        civilian harm is never part of nuclear strategy. In the same work, Sagan
        notes that the United States has stated that the law of armed conflict
        applies to nuclear planning, including the principles of distinction and
        proportionality and a commitment not to target civilians. These
        positions echo the survey’s mix of caution and uncertainty.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Overall, the evidence supports the survey’s message: nuclear weapons
        cause harm that extends well beyond a ceasefire, and ethical policy
        should prioritise future generations while rejecting any reliance on
        civilian suffering.
      </p>
    </div>

    {/* Chemical Weapons */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        3. Chemical Weapons
      </h4>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        3.1 Findings
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The column chart on chemical harm (see Fig. 3) is read alongside the
        cross-weapon comparisons (Figs. 1 and 5) to reveal people's opinion on
        the harm and ethics of chemical weapons. Overall, this figure explores
        chemical agents as seriously harmful to future generations and ethically
        unacceptable, though they are not as harmful as other weapons towards
        future generations. The figure ratings illustrate that most responses
        sit in the Very to Extremely bands, a smaller group chooses Moderately,
        and only a few place chemicals at Slightly. This pattern matches across
        the surveys (see Appendix B). In Figure 1, about one in four respondents
        (25%) selected chemical as the weapon that causes the most long-term
        harm, marking it the second most harmful weapon. Turning to ethics,
        Figure 5 indicates that roughly 30% of people ranked chemicals as the
        most unethical, which is fewer than for biological and nuclear. Looking
        at the broader ethical items (see Fig. 2), the group’s rejection of
        ‘quick victories that cause long-term civilian suffering’ aligns with
        their perception of chemicals as highly harmful, which helps explain why
        chemical weapons still receive many ‘most unethical’ rankings even if
        they are not considered the very worst. In short, respondents read
        chemical weapons as clearly harmful across generations and ethically
        problematic, but not quite as extreme as nuclear or biological threats
        in this sample.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        3.2 Analysis
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        The findings match what many secondary studies say about the medical and
        social effects of chemical agents. Clinical and cohort work after the
        Iran and Iraq War show lasting injury to eyes, skin, and the respiratory
        system among people exposed to sulphur mustard and nerve agents, and
        chronic problems appear many years later (Mohaghegh-Motlagh et al.,
        2012; Khateri et al., 2003). Beyond organ damage, researchers often link
        exposure and combat with PTSD, depression, and anxiety, so the burden
        can stay with families and communities for a long time after the war
        (Mohaghegh-Motlagh et al., 2012; Hashemian et al., 2006). One veteran
        study did not find a big difference in total psychiatric rates between
        chemically injured and not chemically injured groups, but the absolute
        rates were still high, and context also matters (Mohaghegh-Motlagh et
        al., 2012). This supports why students in the survey feel strong ethical
        concern.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        From a law and policy view, the Chemical Weapons Convention makes
        protection and assistance core duties. Article X permits emergency help
        to states that are overwhelmed by chemical attacks, and the OPCW has run
        large ASSISTEX exercises to test readiness (Kelle, 2013). However, there
        are gaps in practice. Only a small number of states send yearly reports
        on their national protection programs, so real readiness can be limited
        (Kelle, 2013). When harm is indiscriminate and long-lived, and
        protection systems are uneven, public tolerance goes down. This also
        explains why many respondents judge chemical weapons as ethically
        troubling.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Medical reviews reach a similar conclusion. A review in The Lancet says
        the effects of chemical exposure can be delayed and then last for a long
        time, with many survivors facing long-term eye, skin, and lung disease,
        and there are few curative options (Volans & Karalliedde, 2002). Public
        legal analysis also says the global ban exists because chemical agents
        cause unnecessary suffering and are hard to control once they are
        released (Public International Law & Policy Group, 2023). Taken
        together, the literature supports the survey results. Chemical weapons
        create multi-year physical and psychological harm and raise serious
        ethical problems for civilians and for future generations. The small gap
        between chemicals and nuclear or biological weapons in the charts makes
        sense because chemicals may not have the same level of destruction, but
        the ethical bottom line stays the same. Long tail harm to civilians is
        not acceptable.
      </p>
    </div>

    {/* Biological Weapons */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        4. Biological Weapons
      </h4>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        4.1 Findings
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        The column chart shows how harmful respondents think biological weapons
        are for future generations (see Fig. 4 above). Overall, the group see
        biological agents as a high and long-lasting danger. At the strongest
        level, “Extremely” is the biggest bar with 28 people, so there is a
        clear peak of perceived harm. The next level, “Very”, adds another large
        block with 16 people, so a solid majority put biological weapons in the
        top two harm bands. In the middle, “Moderately” still gets 18 people,
        which means some think the risk is serious but not catastrophic. At the
        lower end, only a small group chose “Slightly” with 7 people. Taken
        together, these numbers are easy to remember about two in three choose
        Extremely or Very, around one in four choose Moderately, and only a few
        say Slightly. In short, respondents connect biological weapons with
        severe harm across generations.
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        The horizontal bar chart shows ethical judgments across weapon types
        (see Fig. F above). Overall, biological weapons get the highest level of
        ethical concern in this sample. Reading from top to bottom, chemical
        weapons receive the fewest picks on the ethics question, about 20
        people. The middle bar shows nuclear weapons close behind the top place,
        about 23 people. At the bottom, biological weapons go into first place,
        about 24 people. The gaps are small, but the pattern stays quite clear.
        Biological is the least acceptable, nuclear is very close after, and
        chemical is a little lower. In short, participants show the strongest
        ethical concern for biological weapons among the three categories.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        4.2 Analysis
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        The findings show students in our sample think biological weapons are
        very harmful across generations and also the least ethical of the three
        weapon types. Secondary sources help explain why. First, biological
        agents are hard to detect early, and they can start outbreaks in
        populations with weak immunity. Roffey explains that even a very small
        amount of smallpox virus could cause an epidemic today because routine
        vaccination has stopped in many places, so it makes sense that
        respondents rate future harm so high (Roffey, 2002).
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Second, history shows operational use is rare, but state programs and
        dangerous experiments did exist, so the moral risk remains high.
        Leitenberg describes large secret programs during the Cold War in the
        Soviet Union and how these broke the Biological and Toxin Weapons
        Convention, which increases public distrust about this area (Leitenberg,
        2001). Carus also says many alleged cases are disputed, and it is often
        hard to know who is responsible, which makes accountability difficult
        and raises ethical worries about misuse or false claims (Carus, 2015).
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Third, the ethical failure by professionals in Unit 731 is a strong
        warning. Rutecki shows how some physicians left the “do not harm” idea
        and used disease as a weapon, which can break medical ethics and damage
        public trust for many years after the war ends (Rutecki, 2010).
      </p>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
        }}
      >
        Finally, policy shapes the risk too. Leitenberg explains that the
        Biological Weapons Convention (BWC) created a strong global norm, but it
        had problems building a strong verification system, and false
        allegations can also damage the treaty’s credibility over time
        (Leitenberg, 2001). This helps us read the ethics results. When
        oversight is weak and proof of misuse is hard, people are more likely to
        judge biological weapons as not unacceptable. Overall, the literature
        supports our survey message. Biological weapons bring special and
        hard-to-control risks that can spread through public health systems and
        social trust, so respondents connect them with severe intergenerational
        harm and see them as ethically wrong (Leitenberg, 2001; Roffey, 2002;
        Carus, 2015; Rutecki, 2010).
      </p>
    </div>
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(129, 140, 248, 0.3)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        5. Limitation
      </h4>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        While the findings provide valuable insights into perceptions of the
        ethics of nuclear, chemical, and biological weapons, several limitations
        should be acknowledged regarding the primary data. Firstly, the survey
        sample was predominantly made up of teenage respondents, which narrows
        the perspectives that are being used. As a result, the findings cannot
        be considered fully intergenerational, since older age groups with
        different perceptions were underrepresented. Secondly, most participants
        were from Mongolia and Vietnam, which restricts the cultural and
        geographical diversity of views. Therefore, the survey results should be
        interpreted as indicative rather than universally representative, where
        historical, political, and social contexts may shape different ethical
        judgments.
      </p>
    </div>

    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(129, 140, 248, 0.3)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        6. Conclusions
      </h4>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        This report assesses the ethical issues surrounding the use of nuclear,
        chemical and biological weapons, with insight into their side effects on
        civilians and future generations. Throughout the collected survey
        findings combined with secondary sources, these weapons are consistently
        seen as unethical for their long-lasting effects after the war ends,
        continuously harming non-combatants.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        6.1 Nuclear Weapons
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        This report assesses the ethical issues surrounding the use of nuclear,
        chemical and biological weapons, with insight into their side effects on
        civilians and future generations. Throughout the collected survey
        findings combined with secondary sources, these weapons are consistently
        seen as unethical for their long-lasting effects after the war ends,
        continuously harming non-combatants.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        6.2 Chemical Weapons
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Nuclear weapons are objectively defined as the most destructive warfare
        tools, continuously causing mass mortality to mankind. Surveyed people
        connect them with prolonged suffering and indiscriminate destruction,
        which suits key historical events. For example, the Chernobyl incident
        highlights how radiation damages health, education, and livelihoods for
        decades. This adds up to the ethical concern surrounding local
        residents’ enduring legacy, which violates principles of humanitarian
        law and burdens future generations.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        6.3 Biological Weapons
      </h5>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Chemical weapons were also rated as highly damaging, though slightly
        less severe than nuclear or biological arms. Medical studies show
        survivors often experience chronic respiratory, dermatological, and
        psychological conditions. Despite the Chemical Weapons Convention
        banning their use, incomplete reporting and limited preparedness reveal
        weaknesses in enforcement. The ethical concern stems from their
        indiscriminate nature and the inadequate support available for
        survivors.
      </p>
    </div>

    {/* Recommendations */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(129, 140, 248, 0.3)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        7. Recommendations
      </h4>
      <p
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Based on the conclusion, effective recommendations can be made to reduce
        the long-term civilian harm caused by nuclear, chemical, and biological
        weapons. These actions are aimed at national governments, international
        organisations, and the scientific community.
      </p>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        7.1 Nuclear Weapons
      </h5>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Reduce reliance on nuclear deterrence and advance disarmament under the
        Non-Proliferation Treaty.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Ensure all nuclear planning complies with the law of armed conflict,
        particularly distinction, proportionality, and precaution.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Narrow nuclear roles through international agreements that exclude any
        targeting of civilians.
      </li>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        7.2 Chemical Weapons
      </h5>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Strengthen compliance with the Chemical Weapons Convention through
        annual declarations and greater transparency.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Expand OPCW-led training and readiness exercises to improve preparedness
        for chemical incidents.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Provide long-term medical and psychological support for survivors,
        including lung, skin, eye, and mental health care.
      </li>
      <h5
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "1.3rem",
          fontWeight: 600,
        }}
      >
        7.3 Biological Weapons
      </h5>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Reinforce the Biological Weapons Convention (BWC) with stronger
        verification and monitoring mechanisms.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Improve international systems for investigating suspected bioweapon use
        to ensure accountability.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Expand global health surveillance, vaccination programs, and pandemic
        preparedness.
      </li>
      <li
        style={{
          color: "#e5e7eb",
          lineHeight: "1.7",
          fontSize: "0.95rem",
          textAlign: "justify",
          marginBottom: "15px",
        }}
      >
        Promote stronger ethics education for scientists and medical
        professionals to reduce dual-use misuse of research.
      </li>
    </div>

    {/* References */}
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        padding: "25px",
        borderRadius: "12px",
        marginBottom: "25px",
        border: "1px solid rgba(129, 140, 248, 0.3)",
      }}
    >
      <h4
        style={{
          color: "#a78bfa",
          marginBottom: "15px",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        References List
      </h4>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Ahearne, J. F. (2000). Intergenerational issues regarding nuclear
          power, nuclear waste, and nuclear weapons. <em>Risk Analysis</em>,
          20(6), 763–770. https://doi.org/10.1111/0272-4332.206070
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Biological Weapons: History and Threats. (2025, June).{" "}
          <em>YouTube</em>. https://www.youtube.com/watch?v=_f65J0NUBYM
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Chat History. (2024, December 5). Deadliest chemical weapons ever used
          in history [Video]. <em>YouTube</em>.
          https://www.youtube.com/watch?v=tRNoEohHvEU
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Encyclopedia of World Problems and Human Potential. (n.d.). Long-term
          impacts of chemical and biological warfare. Retrieved August 19, 2025,
          from
          https://encyclopedia.uia.org/problem/long-term-impacts-chemical-and-biological-warfare
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Fidler, David P. (1999). Facing the global challenges posed by
          biological weapons. <em>Microbes and Infection</em>, 1(12), 1059–1066.
          https://doi.org/10.1016/s1286-4579(99)80523-1
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Kelle, A. (2013). The Third Review Conference of the Chemical Weapons
          Convention and beyond: Key themes and the prospects of incremental
          change. <em>International Affairs</em>, 89(1), 143–158.
          https://doi.org/10.1111/1468-2346.12009
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Kurzgesagt – In a Nutshell. (2024, February 20). What happens AFTER
          nuclear war? [Video]. <em>YouTube</em>.
          https://www.youtube.com/watch?v=LrIRuqr_Ozg
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Leitenberg, M. (2001). Biological weapons in the twentieth century: A
          review and analysis. <em>Critical Reviews in Microbiology</em>, 27(4),
          267–320. https://doi.org/10.1080/20014091096774
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          OpenAI. (2025). A modern abstract painting symbolizing nuclear,
          chemical, and biological weapons harming civilians [AI-generated
          image]. <em>ChatGPT</em>. https://chat.openai.com/
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Public International Law & Policy Group. (2023, June 9). The
          controversy around chemical warfare, chemical weapons and their
          prohibition.
          https://www.publicinternationallawandpolicygroup.org/lawyering-justice-blog/2023/6/9/the-controversy-around-chemical-warfare-chemical-weapons-and-their-prohibition
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Roffey, R., et al. (2002). Biological weapons and bioterrorism
          preparedness: Importance of public-health awareness and international
          cooperation. <em>Clinical Microbiology and Infection</em>, 8(8),
          522–528. https://doi.org/10.1046/j.1469-0691.2002.00497.x
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Sagan, S. D. (2023). Just and unjust nuclear deterrence.{" "}
          <em>Ethics & International Affairs</em>, 37(1), 19–28.
          https://doi.org/10.1017/S0892679423000035
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          The Editors of Encyclopaedia Britannica. (2025, July 28). Fukushima
          accident [Encyclopedia entry]. <em>Encyclopaedia Britannica</em>.
          https://www.britannica.com/event/Fukushima-accident
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Volans, G. N., & Karalliedde, L. (2002, December 21). Long-term
          effects of chemical weapons. <em>The Lancet</em>, 360(Supplement),
          s55–s56. https://doi.org/10.1016/S0140-6736(02)11908-1
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Warfronts. (2024, March 22). The art of war: Biological warfare
          [Video]. <em>YouTube</em>. https://www.youtube.com/watch?v=Y5qEYYZ_1Us
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Warographics. (2024, March 21). The art of war: Biological warfare
          [Video]. <em>YouTube</em>. https://www.youtube.com/watch?v=Y5qEYYZ_1Us
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Wolfson, R., & Dalnoki-Veress, F. (2022). The devastating effects of
          nuclear weapons. <em>The MIT Press Reader</em>.
          https://thereader.mitpress.mit.edu/devastating-effects-of-nuclear-weapons-war
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Yang, L., et al. (2022). Biomimetic metal–organic frameworks navigated
          biological bombs for efficient lung cancer therapy.{" "}
          <em>Journal of Colloid and Interface Science</em>, 625, 532–543.
          https://doi.org/10.1016/j.jcis.2022.06.008
        </p>

        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.6",
            fontSize: "0.9rem",
            textAlign: "left",
            marginBottom: "0",
            paddingLeft: "20px",
            textIndent: "-20px",
          }}
        >
          Yemelyanau, M., Amialchuk, A., & Ali, M. M. (2011). Evidence from the
          Chernobyl nuclear accident: The effect on health, education, and labor
          market outcomes in Belarus. <em>Journal of Labor Research</em>, 33(1),
          1–20. https://doi.org/10.1007/s12122-011-9122-9
        </p>
      </div>
    </div>
  </motion.div>
);
export default function Research() {
  const [activeSubPage, setActiveSubPage] = useState("survey");

  const renderContent = () => {
    switch (activeSubPage) {
      case "survey":
        return <SurveyQuestionContent />;
      case "data":
        return <RawSurveyDataContent />;
      case "bibliography":
        return <BibliographyContent />;
      case "report":
        return <ReportContent />;
      default:
        return <SurveyQuestionContent />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Research Project
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#9ca3af",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore my comprehensive research work including methodologies,
            sources, and findings
          </p>
        </motion.div>

        {/* Sub-page Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {subPages.map((subPage, index) => (
            <motion.button
              key={subPage.id}
              onClick={() => setActiveSubPage(subPage.id)}
              style={{
                background:
                  activeSubPage === subPage.id
                    ? "linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(167, 139, 250, 0.15))"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                border: "none",
                borderRadius: "12px",
                padding: "16px 24px",
                color: activeSubPage === subPage.id ? "#818cf8" : "#e5e7eb",
                fontWeight: activeSubPage === subPage.id ? 600 : 500,
                fontSize: "1rem",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                boxShadow:
                  activeSubPage === subPage.id
                    ? "0 4px 15px rgba(129, 140, 248, 0.3), 0 2px 8px rgba(129, 140, 248, 0.1)"
                    : "0 2px 10px rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                minWidth: "160px",
                justifyContent: "center",
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow:
                  activeSubPage === subPage.id
                    ? "0 6px 20px rgba(129, 140, 248, 0.4), 0 3px 12px rgba(129, 140, 248, 0.2)"
                    : "0 4px 15px rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <span style={{ fontSize: "1.2em" }}>{subPage.icon}</span>
              <span>{subPage.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
            borderRadius: "20px",
            backdropFilter: "blur(16px)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            minHeight: "500px",
          }}
        >
          <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        </motion.div>

        {/* Active sub-page description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "30px",
            padding: "20px",
            background:
              "linear-gradient(135deg, rgba(129, 140, 248, 0.1), rgba(167, 139, 250, 0.05))",
            borderRadius: "12px",
            border: "1px solid rgba(129, 140, 248, 0.2)",
          }}
        >
          <p
            style={{
              color: "#a78bfa",
              fontSize: "1rem",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {subPages.find((page) => page.id === activeSubPage)?.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

import {
  demoProfile,
  demoFeasibility,
  demoLegalPath,
  demoPrograms,
  initialActionTasks,
  ProfileData,
  FeasibilityData,
  LegalStep,
  FundingProgram,
  ActionTask
} from '../data/demoData';

/**
 * CivicPilot API Service Layer
 * Abstracts backend requests to allow seamless transition from local mock data
 * to production endpoints (e.g. POST /analyze-case, GET /funding-programs).
 */

export interface AnalysisResponse {
  profile: ProfileData;
  feasibility: FeasibilityData;
}

export const civicPilotApi = {
  /**
   * Analyzes the user's business idea & context
   * Target production endpoint: POST /analyze-case
   */
  async analyzeCase(userPrompt: string): Promise<AnalysisResponse> {
    // Simulate API network latency
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      profile: demoProfile,
      feasibility: demoFeasibility,
    };
  },

  /**
   * Fetches relevant funding programs based on project profile
   * Target production endpoint: GET /funding-programs?location=Settat&stage=early
   */
  async getFundingPrograms(): Promise<FundingProgram[]> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return demoPrograms;
  },

  /**
   * Fetches required legal and administrative path steps
   * Target production endpoint: GET /legal-requirements?type=auto-entrepreneur
   */
  async getLegalRequirements(): Promise<LegalStep[]> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return demoLegalPath;
  },

  /**
   * Generates tailored step-by-step action plan checklist
   * Target production endpoint: POST /generate-action-plan
   */
  async generateActionPlan(): Promise<ActionTask[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return initialActionTasks;
  }
};

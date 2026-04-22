export const GITHUB_ORG = 'nlfts'

export interface GithubStats {
  mergedPrs: number
  helpfulIssues: number
  helpfulComments: number
  totalPoints: number
}

export async function fetchUserGithubStats(_username: string): Promise<GithubStats> {
  // Mocking the fetch for now as we'll need real implementation with caching
  // In a real scenario, we would use octokit or native fetch with GITHUB_TOKEN

  // This is a placeholder for the actual logic that will:
  // 1. Fetch merged PRs in nlfts org
  // 2. Fetch issues with specific labels or reactions
  // 3. Fetch comments with specific reactions

  return {
    mergedPrs: Math.floor(Math.random() * 5),
    helpfulIssues: Math.floor(Math.random() * 3),
    helpfulComments: Math.floor(Math.random() * 2),
    totalPoints: 0 // Will be calculated based on stats
  }
}

import axios from "axios";
import MemberModel from "./MemberModel";
import config from "../../config";

class MemberService {
  constructor(private membersUrl = `${config.baseUrl}/members`) {}

  async create(member: MemberModel) {
    await axios.post(this.membersUrl, member, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  async all() {
    const response = await axios.get(this.membersUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data as MemberModel[];
  }

  async contributionAccountBalance(memberId: number) {
    const response = await axios.get(
      `${this.membersUrl}/${memberId}/contributionBalance`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.balance as number;
  }

  async countExistingLoans(memberId: number) {
    const response = await axios.get(
      `${this.membersUrl}/${memberId}/countExistingLoans`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.count as number;
  }
}

export default MemberService;

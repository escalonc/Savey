import axios from "axios";
import MemberModel from "./MemberModel";

class MemberService {

    constructor(private membersUrl = "https://localhost:5001/api/members") {
    }

    async create(member: MemberModel) {
        await axios.post(this.membersUrl, member, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default MemberService;
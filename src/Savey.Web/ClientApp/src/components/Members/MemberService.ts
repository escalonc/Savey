import axios from "axios";
import MemberModel from "./MemberModel";
import config from "../../config"

class MemberService {

    constructor(private membersUrl = `${config.baseUrl}/members`) {
    }

    async create(member: MemberModel) {
        await axios.post(this.membersUrl, member, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async all() {
        const response = await axios.get(this.membersUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return response.data as MemberModel[];
    }
}

export default MemberService;
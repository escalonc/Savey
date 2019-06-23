interface MembersReportModel {
  memberId: number;
  member: string;
  startDate: Date;
  investment?: number;
  saving?: number;
  total?: number;
}

export default MembersReportModel;

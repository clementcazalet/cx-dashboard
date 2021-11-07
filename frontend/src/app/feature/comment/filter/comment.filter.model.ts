export interface CommentFilter {
  commentPresent: string;
  comment?: string;
  starStart?: number;
  starEnd?: number;
  dateStart?: Date;
  dateEnd?: Date;
  user?: string;
  tenant?: string;
}

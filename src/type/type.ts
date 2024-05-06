export type OrderStatus = "complete" | "inprogress" | "rejected";

export interface Order {
 id: string;
 startday: number;
 enddate: number;
 projectName: string;
 clientName: string;
 status: OrderStatus;
 phases:string;
}

export interface OrderPhase {
    id: string;
    phasename: string;
  }

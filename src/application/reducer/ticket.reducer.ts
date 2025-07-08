import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITicket from "@/domain/entities/ticket.entity";
import { TicketState } from "../types/state.types";

const initialState: TicketState = {
  loading: false,
  error: null,
  tickets: [],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    fetchTicketsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTicketsSuccess(state, action: PayloadAction<ITicket[]>) {
      state.loading = false;
      state.tickets = action.payload;
    },
    fetchTicketsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addTicket(state, action: PayloadAction<ITicket>) {
      state.tickets.push(action.payload);
    },
    deleteTicket(state, action: PayloadAction<number>) {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
    },
    updateTicket(state, action: PayloadAction<ITicket>) {
      const index = state.tickets.findIndex((ticket) => ticket.id === action.payload.id);
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },
  },
});

export const {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  addTicket,
  deleteTicket,
  updateTicket
} = ticketSlice.actions;

export default ticketSlice.reducer;

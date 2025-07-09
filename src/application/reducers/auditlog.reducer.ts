import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuditLog from "@/domain/entities/auditLog.entity";
import { AuditLogState } from "../types/state.types";

const initialState: AuditLogState = {
  loading: false,
  error: null,
  auditlogs: [],
};

const auditlogSlice = createSlice({
  name: "auditlogs",
  initialState,
  reducers: {
    fetchAuditLogsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAuditLogsSuccess(state, action: PayloadAction<IAuditLog[]>) {
      state.loading = false;
      state.auditlogs = action.payload;
    },
    fetchAuditLogsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addAuditLog(state, action: PayloadAction<IAuditLog>) {
      state.auditlogs.push(action.payload);
    },
    deleteAuditLog(state, action: PayloadAction<number>) {
      state.auditlogs = state.auditlogs.filter((auditlog) => auditlog.id !== action.payload);
    },
    updateAuditLog(state, action: PayloadAction<IAuditLog>) {
      const index = state.auditlogs.findIndex((auditlog) => auditlog.id === action.payload.id);
      if (index !== -1) {
        state.auditlogs[index] = action.payload;
      }
    },
  },
});

export const {
  fetchAuditLogsRequest,
  fetchAuditLogsSuccess,
  fetchAuditLogsFailure,
  addAuditLog,
  deleteAuditLog,
  updateAuditLog
} = auditlogSlice.actions;

export default auditlogSlice.reducer;

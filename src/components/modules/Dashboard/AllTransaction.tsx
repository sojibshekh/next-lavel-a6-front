"use client";

import { useState, useMemo } from "react";
import { useTransactionQuery } from "@/redux/features/auth/wallte.api";
import type { ITransaction } from "@/types";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TransactionsTableProps {
  role: "USER" | "AGENT" | "ADMIN";
  userId?: string;
}

const TransactionsTable = ({ role, userId }: TransactionsTableProps) => {
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const { data, isLoading } = useTransactionQuery({
    userId: role === "USER" ? userId : undefined,
    agentId: role === "AGENT" ? userId : undefined,
  });

  const transactions = data?.data || [];

  // Filter front-end
  const filteredTransactions = useMemo(() => {
    if (typeFilter === "all") return transactions;
    return transactions.filter((tx: ITransaction) => tx.type === typeFilter);
  }, [transactions, typeFilter]);

  const totalPages = Math.ceil(filteredTransactions.length / 10);

  const currentData = filteredTransactions.slice((page - 1) * 10, page * 10);

  return (
    <div className="space-y-4 p-4">
      {/* Filter by type */}
      <div className="flex gap-4 items-end">
        <div className="w-full max-w-xs">
          <Label className="pb-4"> Transaction Type</Label>
          <Select  value={typeFilter}
            onValueChange={(val) => { setTypeFilter(val); setPage(1); }}>
            <SelectTrigger className="w-full pt-2 pb-2">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="deposit">Deposit</SelectItem>
              <SelectItem value="withdraw">Withdraw</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="registration">Registration</SelectItem>
              <SelectItem value="top-up">Top-up</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transaction Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4}>Loading...</TableCell>
            </TableRow>
          ) : currentData.length ? (
            currentData.map((tx: ITransaction) => (
              <TableRow key={tx._id}>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.status}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No transactions found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-4">
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
          <span className="px-2 py-1">{page}</span>
          <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;

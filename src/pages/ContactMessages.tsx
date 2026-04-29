import React, { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  Search,
  Eye,
  Trash2,
  MessageSquare,
  Clock3,
  CheckCircle,
  User,
  X,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type MessageStatus = "New" | "Read" | "Resolved";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedDate: string;
  status: MessageStatus;
}

const contactMessagesData: ContactMessage[] = [
  {
    id: "1",
    name: "Abhishek Kumar",
    email: "abhishek@example.com",
    phone: "9876543210",
    subject: "Admission Enquiry",
    message:
      "I want to know about BCA admission process, fees structure, and scholarship details.",
    submittedDate: "24 Apr 2026",
    status: "New",
  },
  {
    id: "2",
    name: "Sneha Rai",
    email: "sneha@example.com",
    phone: "9988776655",
    subject: "Course Details",
    message:
      "Please share details about B.Com with CA Coaching and eligibility criteria.",
    submittedDate: "23 Apr 2026",
    status: "Read",
  },
];

const ContactMessages: React.FC = () => {
  const [messages, setMessages] =
    useState<ContactMessage[]>(contactMessagesData);
  const [selectedMessage, setSelectedMessage] =
    useState<ContactMessage | null>(null);
  const [search, setSearch] = useState("");

  const filteredMessages = useMemo(() => {
    const value = search.toLowerCase();

    return messages.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.phone.includes(value) ||
        item.subject.toLowerCase().includes(value)
    );
  }, [messages, search]);

  const stats = useMemo(() => {
    return {
      total: messages.length,
      newMessages: messages.filter((item) => item.status === "New").length,
      read: messages.filter((item) => item.status === "Read").length,
      resolved: messages.filter((item) => item.status === "Resolved").length,
    };
  }, [messages]);

  const updateStatus = (id: string, status: MessageStatus) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );

    setSelectedMessage((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
    setSelectedMessage(null);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Contact Messages
        </h1>
        <p className="text-sm text-slate-500">
          View and manage enquiry messages submitted from the user contact form.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Messages"
          value={stats.total}
          icon={<MessageSquare className="h-5 w-5 text-orange-600" />}
        />
        <StatsCard
          title="New"
          value={stats.newMessages}
          icon={<Mail className="h-5 w-5 text-blue-600" />}
        />
        <StatsCard
          title="Read"
          value={stats.read}
          icon={<Clock3 className="h-5 w-5 text-yellow-600" />}
        />
        <StatsCard
          title="Resolved"
          value={stats.resolved}
          icon={<CheckCircle className="h-5 w-5 text-green-600" />}
        />
      </div>

      <Card className="rounded-2xl border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <div className="flex flex-col gap-3 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Enquiry List
              </h2>
              <p className="text-sm text-slate-500">
                All user-submitted contact form details.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, phone, subject..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <Th>User</Th>
                  <Th>Contact</Th>
                  <Th>Subject</Th>
                  <Th>Message</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredMessages.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <Td>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                          <User className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-500">#{item.id}</p>
                        </div>
                      </div>
                    </Td>

                    <Td>
                      <div className="space-y-1 text-sm text-slate-600">
                        <p className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5" />
                          {item.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5" />
                          {item.phone}
                        </p>
                      </div>
                    </Td>

                    <Td>
                      <p className="font-medium text-slate-900">
                        {item.subject}
                      </p>
                    </Td>

                    <Td>
                      <p className="max-w-xs truncate text-sm text-slate-500">
                        {item.message}
                      </p>
                    </Td>

                    <Td>
                      <p className="text-sm text-slate-600">
                        {item.submittedDate}
                      </p>
                    </Td>

                    <Td>
                      <StatusBadge status={item.status} />
                    </Td>

                    <Td>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedMessage(item);
                            updateStatus(item.id, "Read");
                          }}
                          className="gap-2 bg-orange-600 hover:bg-orange-700"
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => deleteMessage(item.id)}
                          className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </Td>
                  </tr>
                ))}

                {filteredMessages.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-10 text-center text-sm text-slate-500"
                    >
                      No contact messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 bg-slate-50 p-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Message Details
                </h2>
                <p className="text-sm text-slate-500">
                  Complete enquiry information from {selectedMessage.name}
                </p>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-red-50 hover:text-red-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InfoBox label="Full Name" value={selectedMessage.name} />
                <InfoBox label="Email Address" value={selectedMessage.email} />
                <InfoBox label="Phone Number" value={selectedMessage.phone} />
                <InfoBox label="Submitted Date" value={selectedMessage.submittedDate} />
              </div>

              <InfoBox label="Subject" value={selectedMessage.subject} />

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <div className="min-h-[140px] rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                  {selectedMessage.message}
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  Update Status
                </h3>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <select
                    value={selectedMessage.status}
                    onChange={(e) =>
                      updateStatus(
                        selectedMessage.id,
                        e.target.value as MessageStatus
                      )
                    }
                    className="w-full rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="New">New</option>
                    <option value="Read">Read</option>
                    <option value="Resolved">Resolved</option>
                  </select>

                  <Button
                    onClick={() => setSelectedMessage(null)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{value}</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
    {children}
  </th>
);

const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="px-5 py-4 align-top text-sm">{children}</td>
);

const StatusBadge = ({ status }: { status: MessageStatus }) => {
  const cls =
    status === "Resolved"
      ? "bg-green-50 text-green-700 border-green-200"
      : status === "Read"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : "bg-yellow-50 text-yellow-700 border-yellow-200";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${cls}`}
    >
      {status}
    </span>
  );
};

const InfoBox = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <div className="min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700">
      {value}
    </div>
  </div>
);

export default ContactMessages;
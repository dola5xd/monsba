"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Button from "./Button";
import { form as MotionForm, div as MotionDiv } from "motion/react-client";
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[A-Za-z\s]+$/),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9+\-\s]{8,15}$/),
  address: z
    .string()
    .min(10)
    .regex(/^[\u0600-\u06FF\w\s,.-]+$/i),
  type: z.enum([
    "Wedding",
    "Birthday",
    "Engagement",
    "Anniversary",
    "Corporate",
  ]),
  message: z.string().min(10),
});
type Props = {
  onSubmitSuccess: () => void;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ContactForm({ onSubmitSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log("Submitted:", data);
    onSubmitSuccess();
  };

  return (
    <MotionForm
      onSubmit={handleSubmit(onSubmit)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className="flex flex-col gap-5 w-full justify-center md:w-1/2 p-10 self-stretch bg-white lato-font"
    >
      <MotionDiv variants={item} className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="p-2 rounded border border-gray-300 text-sm"
            placeholder="Full Name"
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="p-2 rounded border border-gray-300 text-sm"
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
      </MotionDiv>

      <MotionDiv variants={item} className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="p-2 rounded border border-gray-300 text-sm"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-xs text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="address" className="text-sm font-semibold">
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            className="p-2 rounded border border-gray-300 text-sm"
            placeholder="Your Address"
          />
          {errors.address && (
            <span className="text-xs text-red-500">
              {errors.address.message}
            </span>
          )}
        </div>
      </MotionDiv>

      <MotionDiv variants={item} className="flex flex-col gap-1">
        <label htmlFor="type" className="text-sm font-semibold">
          Your Event
        </label>
        <select
          id="type"
          {...register("type")}
          className="p-2 rounded border border-gray-300 text-sm"
        >
          <option value="">Event</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Corporate">Corporate</option>
        </select>
        {errors.type && (
          <span className="text-xs text-red-500">{errors.type.message}</span>
        )}
      </MotionDiv>

      <MotionDiv variants={item} className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="p-2 rounded border border-gray-300 text-sm"
          placeholder="Tell us more about your event..."
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message.message}</span>
        )}
      </MotionDiv>

      <MotionDiv variants={item}>
        <Button
          type="submit"
          variants="secondary"
          className="flex items-center gap-2 self-start text-base py-3 mt-3 hover:bg-primary hover:text-white"
        >
          Request Free Consultation <MdOutlineArrowRightAlt size={24} />
        </Button>
      </MotionDiv>
    </MotionForm>
  );
}

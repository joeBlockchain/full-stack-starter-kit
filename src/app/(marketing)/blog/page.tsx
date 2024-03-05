"use client";

//import react stuff
import { useState } from "react";

//import clerk stuff
import { useUser } from "@clerk/clerk-react";

//import convex stuff
import { useAction, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

//import shadcnui stuff
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const { user } = useUser();
  const isSubscribed = useQuery(api.subscriptions.getIsSubscribed, {
    userId: user?.id,
  });
  const [pending, setpending] = useState(false);

  const portal = useAction(api.stripe.portal);
  const pay = useAction(api.stripe.pay);

  const onClickStripe = async () => {
    if (!user) return;

    setpending(true);

    try {
      const action = isSubscribed ? portal : pay;

      const redirectURL = await action({ userId: user.id });

      window.location.href = redirectURL;
    } finally {
      setpending(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center justify-center mt-48">
      <h1>Blog</h1>
      <Button onClick={onClickStripe} disabled={pending}>
        {isSubscribed ? "Payment Settings" : "Upgrade"}
      </Button>
    </div>
  );
}

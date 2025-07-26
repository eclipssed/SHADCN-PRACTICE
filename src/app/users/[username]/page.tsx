import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppRadialChart from "@/components/AppRadialChart";

const SingleUserPage = ({ params }: { params: { username: any } }) => {
  const { username } = params;
  console.log(params);
  console.log(username);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between ">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser username={username} />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress className="" value={73} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>{username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>John@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone no.:</span>
                <span>034393959514</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                {/* <span></span> */}
                <Badge> Admin </Badge>
              </div>
            </div>
            <p
              className="text-sm text-muted-foreground mt-4
            "
            >
              Joined on 2025.03.14
            </p>
          </div>
          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center  gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/143472071?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem,
              quae saepe voluptate dolorem vero culpa. Debitis inventore
              voluptates mollitia molestias ipsum maiores possimus corporis
              tempore veritatis. Explicabo adipisci ea nobis nemo, autem dolorum
              pariatur beatae, molestiae odio fugiat, tempore consectetur earum?
              Et eligendi quo facere ipsum suscipit ab tenetur numquam. Vel,
              eligendi recusandae? Nam quasi similique, doloribus blanditiis rem
              ipsa perferendis eius, libero sit autem suscipit ut laboriosam,
              veritatis maxime iste. Optio cupiditate tempore soluta provident
              enim expedita dolore? Id maxime ex consectetur pariatur totam
              fugit non numquam est laudantium, dolorem dignissimos doloribus
              adipisci reiciendis amet blanditiis officiis. Ducimus!
            </p>
          </div>
          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppRadialChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "totalDurationHours" DOUBLE PRECISION DEFAULT 0,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalStudents" INTEGER DEFAULT 0,
    "ratings" DOUBLE PRECISION DEFAULT 0,
    "whatYouWillLearn" TEXT[],
    "whatYouWillGet" TEXT[],
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "price" DOUBLE PRECISION NOT NULL,
    "discountedPrice" DOUBLE PRECISION,
    "course_CatagoryId" TEXT NOT NULL,
    "isBestSeller" BOOLEAN DEFAULT false,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "courseId" TEXT,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course_Catagory" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Course_Catagory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "ratings" DOUBLE PRECISION DEFAULT 0,
    "description" TEXT,
    "likes" INTEGER DEFAULT 0,
    "disLikes" INTEGER DEFAULT 0,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToCourse_Catagory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToCourse_Catagory_AB_unique" ON "_CourseToCourse_Catagory"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToCourse_Catagory_B_index" ON "_CourseToCourse_Catagory"("B");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToCourse_Catagory" ADD CONSTRAINT "_CourseToCourse_Catagory_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToCourse_Catagory" ADD CONSTRAINT "_CourseToCourse_Catagory_B_fkey" FOREIGN KEY ("B") REFERENCES "Course_Catagory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

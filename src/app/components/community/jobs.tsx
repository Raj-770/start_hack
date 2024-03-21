import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
interface JobPosition {
  title: string;
  type: string; // Permanent, Internship, etc.
  gender: string; // (F/M/D) or similar
}
const jobPositions: JobPosition[] = [
  //   {title: "AI TRACK LEAD", type: "Permanent", gender: "(F/M/D)"},
  //   {title: "CRM MANAGER", type: "Contract", gender: "(F/M/D)"},
  {title: "Software Engineer", type: "Contract", gender: "(F/M/D)"},
  {title: "Data Scientist", type: "Permanent", gender: "(F/M/D)"},
  {title: "Marketing Analyst", type: "Permanent", gender: "(F/M/D)"},
  //   { title: 'Product Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Graphic Designer', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Financial Analyst', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'HR Coordinator', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Customer Support Specialist', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Operations Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Sales Executive', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Business Analyst', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Project Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Legal Counsel', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'UX/UI Designer', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Quality Assurance Engineer', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Content Writer', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Network Engineer', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Accountant', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Healthcare Administrator', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'IT Support Specialist', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Supply Chain Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Social Media Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Digital Marketing Specialist', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Research Scientist', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Technical Writer', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Customer Success Manager', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Software Architect', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Brand Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'DevOps Engineer', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Public Relations Specialist', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Sales Manager', type: 'Permanent', gender: '(F/M/D)' },
  {title: "UI Developer", type: "Contract", gender: "(F/M/D)"},
  //   { title: 'Database Administrator', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Customer Service Representative', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Scrum Master', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Systems Analyst', type: 'Permanent', gender: '(F/M/D)' },
  // { title: 'Event Coordinator', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Web Developer', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Financial Advisor', type: 'Permanent', gender: '(F/M/D)' },
  // { title: 'Business Development Manager', type: 'Permanent', gender: '(F/M/D)' },
  {title: "Technical Support Engineer", type: "Contract", gender: "(F/M/D)"},
  //   { title: 'Human Resources Manager', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'UX Researcher', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Salesforce Administrator', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Product Owner', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Content Strategist', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Data Analyst', type: 'Contract', gender: '(F/M/D)' },
  //   { title: 'Software Tester', type: 'Permanent', gender: '(F/M/D)' },
  //   { title: 'Marketing Coordinator', type: 'Permanent', gender: '(F/M/D)' },
];
const Jobs: NextPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPositions.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h2 className="font-semibold text-xl text-gray-800">
                {job.title}
              </h2>
              <p className="text-gray-600">{job.type}</p>
              <p className="text-gray-600">{job.gender}</p>
            </div>
          ))}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-600">Add a job</p>
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///+AgIB8fHx6enr4+PiFhYXq6urk5OTDw8PX19fR0dH8/Px3d3eXl5eEhISBgYHe3t7IyMjz8/OMjIynp6e4uLiSkpKxsbHp6emysrLb29ugoKC+vr7U1NSpqanBwcEXS08qAAAMT0lEQVR4nO1da5uqIBBW8FJeSjG1str//y+P1rZddgZQGLR9zvutZ1vgDZgbw+B5TpAGIi7OSVIOSJLzutiLNHXTNy3SqCjrS16xrAd/wvDZr/JLXRYimHuUE5HGyWGgxhljPoL+T3wg2ibxh01oWpxyn3Oc2jtTzvy8Pn4Iy3T/lfcrUpfcE80sy0/x0pesOLZVxkeT+wHPwstazM0Cx3q3mTB371PJN916keu1aH1zeneSfhvPzecNYlVlluh9k8ya1YJWa3HZGuw9DHx7KeZmdkPSaGuFkWAsX8/NzgvKMKOhd+OYVcmsUqfffgTL8xVzckzLkJzfAN6c5yF4pp+/B8cZZE7cUe6/d7BsF7nlJ1oq+Yly3J5cmqxJ6JjfAF45Ux2R0wX6zHHnxswp/Rkm8AYWJvT8ROdMgoIcyadxbbID2Q1mFMMjJb+0Hr8Dr5zCqmnyB5qmCjf+RL78QCdU9/nIFdqPv+rqsohE8GJ5pWkgRBQfk6+2a/yxLHlOpRvXmzFDuQaX1pHy907FuW7GOc8spNEbK/1BML5tTsWIxSTWh1FzyVb2+aWt7gplLNyVE9bR/ivXJ8lb2w5HoKskmN8lkwV6tOp0lS3f2ZU3otHqmPFqZSgFolozXsc6m5pxX+l0yradDV2VJrnWRLLGHsVYhyALW2tCPG63Oj1WtjqMNewYtqmtKql9qzGPrNlb6UyDINvW1s3FSIMjq2xQVBNkvr31+YzoouTIQnOKGgQ7sgj8MVd2bjyLSinau2yEwb60VFmKpuJGrSZaYn9NtMpZNKEYKQiyhtRZu2GtGkQ1/UcOFNuA3uG+QlwUw8inDiPtpC0zv7RKRIJEvhtZN9FGlXsTLLejbrUg5D82301q9ST3Jg5Oz0vSg5xiPaHNs7TJjYOw3itK6e/Nx++Y/VbSHgtnOCkp5LbH2BFJHULWOD4muSGSivaROiPdyQha9T1HQCpvWDeqrZVEytiOH4yANJaSjdmKsey3askIqJFKlb+++goaCcEpctkeZFqD5doKrJW0Mi9BeVSTnzQbWeME+ZxL9AaZLcn0PFVR4S1ciIevAxnFSmud4suAdYvIGRS4XtRap0ecoMUApREE7jFu1bZIistRa+FJY8SoScnUXobEo1hIpuCABB0kVx28RfivM9XfjRWY1OgJXacqYYPao9NNGVWwbJINiAtU/iX9xwI7px9hL7yDhKEX4DpNKg9RObydHrKgYegVaIMys2uNiZkJLvQPiBh6NdbwBpf5KTaFGjIYBxVDNNbJDuj/JNgUhiaakIqhRCtiw8Wn0CgwSsYQ9dNR8xmz10bGB95BxzDFgkkcEaeoIDWz1ugYesW4nRgjutDU6SVk6GFBjS04idi3DY52rqBkGIVwoxzKmRKIZDITMx4tQ9RRaAATDBFMBubaN0gZpojxlv2+ooH5hcz4NgcpQ6/EJubXNwvtb44FLUN0En8Z0oicYebH2LQMvRIZ+LsGEMj3zKeQmiEWvt68fQ9bzhbuVBEzxDJ7s7egC+IyQ0J3LKgZIr7wW1AiQKbQRi4CNUNMJ4YvDSN+U2gjQErOMIJ74C87DF6kdg7SyBlio39228UG7txKSh49Q+Qo6XmZIou0Me57AD1DxB57lqawurciZ1wwRBTGk9JHLB/YyRoNBwwjuOnHGoxA39cwePEDBwyR8ET2M0WwQcMspT25YAgv00eUFz6ssKIMPTcM93DTP6sQ9O5tLVInDD1Ymt6t7z28DW1ljzphCEco2HeUEPErbJ34OmEI5zjdj0vh9Bk76t5zxNADg253jQiuYXupQW4YgtLy24FPwY65tSx8NwzhYMbNNN3DQ7CWWeKGIcyCX+NRZ1DQWNuGjhjCluctbAqepUpOGcfCDUPYe7jlSIH+oy2TzXPGENyIt5NEWJTau0zhiCGoEa/CNAA1SWipX0/N0FI3cJwiTDHfSnkec9yEmpAT7Aehia08dgs7+lmAHIyqky8kabZE4ArRAPqIWYwoC7Uodc9QJfxAq2awTEGrnCkzUZfHEDSvh4kH/6CurLE8hqBeH467YZNV6Rwuj+EXNlWwwv9AhmCsZmAIiiC1SbM8hqAjPzCETZq/xBC0ydUno8tjCB5N9AxT2P1X+r/LYwgr9hXi4f8phvChxn+G/xkSYDJDOKT/n+F/hgT4zxBlCIY3mLL04vIYYjYNYrX9Jbs0n9LaRzH8+/4hGA3/RIaojw8WKfgzcZqBCJi7+KdibfAG/Svx0iG37fgpMW8VQzjmHXleBB6QKs8tFscQPrfgPQ8x7expcQzhs6fr3XU42KbKplkcQzij5pqMMe0MeM2ZJpQj10QmH5LkDBhWiKp0miDShYphrNnOXr5xYGVx1Xpw0tfH5WLAB6RXLxC50/Vh+TTwUrmJE/jK06flRCVgN99lQGAP8cPy2uBj0O8cWThT/8NyE6XTBIsajXpEenDCEElr+1YwSI6wrawoJwyRZPz7LKmvDZnACUP46lN4/zN8W8H0Hv4dLhjCRumjPsYXPMWW3uRzwRDWFY8cI2QjWiqw54IhvEgfd2aQe0+bj7n3hNwurB7fQO6u2ZGmDhjCSd7PoRg4EdrGVXXPCUPkYteT4YlU/VC6wVqgZ4iUzH2JU8A/gh3blJ4hfCXmVVIiF4MqG3KOnGEAr8DXCooCuY9vQ9aQM0TqzrypAqSmgnFxGo+eIaLr3q3OM1wkSn1SqgY1Q9ie+ZU0HSDdW7hmScwQqzL3q12sPo15WVZihsgbDr9tTqQc3fJrDCFV6bJf9SDQOlHGESlahtgzHMDMYDV4jHciKUNsYqBypPDtIAs6kZQhVhwSvGqPVTxtDEUBJUP44MxH6s4IrG6ibj1+BJQMsZcSkLozWB1owwoghAyxWsKY8Ij/TP3S9zpfP8BqZJsJGzqGaA1aVImjj68YBRbJGO7h6Myrc/8GbCcahd2oGOJljyW7Crmar5MFhoOKIVpaX2pLo2X1Dc5piBjiNdmlCw5Orhn+7XPq6iviZ+hjQ9NLENAwRFeb6iEWzAwy2IokDPGn7JW5ToiL0WM7sQIfBcMz2pzqxrcnqVs+9UXTTJEINIGh5J0ZDfsLs90GaTNpQX2t5BgvwiL8JUStdzgk7z3t/sR7TxJhY7Omy3SYv9klfXdt7oflPIme6IenGxlc8tt5Xo0/SKW/xCTv8Bh7/KZAX5fphzYi3oIk8y1gFmXPAo+KXkuWgs/b2SSq7HlH/fcdr5C+Oc4uMz21GkhfuB0ZnUf952tj8zyXK9GD/oT3jODkhTvFykqV6HGI8VcPB4w/fZA+PM5CSwlT+pC/IA8+u6KC9Old52+r19LB8EnGllTaDDvbXkk3JaTvVfcEJz6QKn19vKfo26pSq8Ra/qz6RKenRyTf272v4USmBhI75joMgxdgY/lv17dtLaMfRyFfSr3UM0ndimVq8YqWWPsHB19F0EweFCqKLLRXJRPAWbFRek1vqprRwOuDY0em/mO5CB2wMe98rabotyQSR7Rb9RVAG48UH5V70Web2jpHUav5sdDOK8zKvXjleLLKUYdfT9DW/iikJuFPd7W1d7vjVq9HewJApRe/e9zurCya406hIL67q2yajZFC6947ZVVpuFjFqeJ6feV2t77CRn3qeHs5T+5aJJ3G9ruCW/fCRSfzF184snASSZHsQvW96DtBgkhKetClOJDc5KtRuyT+yrfa9Mgi06WWALiT5CzclbHGLx3Eq92G6f98w06gshQLpZH4NpJe8nR1WURCBGn67KT2n9JAiOhYHrpQ487+C3hDFyUSHZL7JmXJ/E1VNT3yHwyfqnDj61QkeEd2IfVKR61UCrANdQwszsfsGOvgDsIK6Wn8wrIFtnUTGpptGrPcmuWrQqllp1oGr0ijCW8QF9dLlfm14/OgYzNacZggowuV4ChDZ9uRV86PSa4ITjp+qgV+TTLbmWzU0hsAvCpnzeKJWk66VrOwnOnA+QFRh3pO+XgwlrtUEDiCJKfQHdy/2IkVWsG+3tpVHiyzGLqzg34iua3V2nvPu+MikgTfIMpua06y9/a7+bSDEkOwLDMg2S/OXTJLKssIBEXdZFNYMp41J53AzhIQHA/VsJt0efZf9ZvD4ifvDUGctHnIMilP1k8cC5tLGS9358kRRMeyvuQVy3rwHj2lG/rPPbVrJO5DFqYUaSqi+LhOytVqVQ5I1nEUpE7m7R8AF7fNtR6wtAAAAABJRU5ErkJggg=="
                alt="add"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;

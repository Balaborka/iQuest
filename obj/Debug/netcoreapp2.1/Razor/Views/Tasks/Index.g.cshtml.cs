#pragma checksum "E:\Develop\Dplm\IQuest\IQuest\Views\Tasks\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "34f2655df4a64e35cd40403c0c141558a25401f0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Tasks_Index), @"mvc.1.0.view", @"/Views/Tasks/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Tasks/Index.cshtml", typeof(AspNetCore.Views_Tasks_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "E:\Develop\Dplm\IQuest\IQuest\Views\_ViewImports.cshtml"
using IQuest;

#line default
#line hidden
#line 2 "E:\Develop\Dplm\IQuest\IQuest\Views\_ViewImports.cshtml"
using IQuest.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"34f2655df4a64e35cd40403c0c141558a25401f0", @"/Views/Tasks/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2bdc6bc4cbd088ca11c09b30ced76d4eeae067af", @"/Views/_ViewImports.cshtml")]
    public class Views_Tasks_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Questions>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(18, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Develop\Dplm\IQuest\IQuest\Views\Tasks\Index.cshtml"
  
    ViewData["Title"] = "Tasks!";

#line default
#line hidden
            BeginContext(62, 43, true);
            WriteLiteral("\r\n<script src=\"/js/site.js\"></script>\r\n\r\n\r\n");
            EndContext();
#line 10 "E:\Develop\Dplm\IQuest\IQuest\Views\Tasks\Index.cshtml"
     foreach(var q in Model.Items) {

#line default
#line hidden
            BeginContext(143, 11, true);
            WriteLiteral("        <p>");
            EndContext();
            BeginContext(155, 6, false);
#line 11 "E:\Develop\Dplm\IQuest\IQuest\Views\Tasks\Index.cshtml"
      Write(q.Text);

#line default
#line hidden
            EndContext();
            BeginContext(161, 6, true);
            WriteLiteral("</p>\r\n");
            EndContext();
#line 12 "E:\Develop\Dplm\IQuest\IQuest\Views\Tasks\Index.cshtml"
    }

#line default
#line hidden
            BeginContext(174, 14, true);
            WriteLiteral("            \r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Questions> Html { get; private set; }
    }
}
#pragma warning restore 1591

using System;
using System.Text;
using System.Collections.Generic;


namespace Ren.CMS.CORE.nhibernate.Domain {
    
    public class Link {
        public virtual int Id { get; set; }
        public virtual string LinkType { get; set; }
        public virtual string LinkController { get; set; }
        public virtual string LinkAction { get; set; }
        public virtual string LinkHref { get; set; }
        public virtual string LinkText { get; set; }
        public virtual string LinkRelationship { get; set; }
        public virtual string LinkIsActive { get; set; }
        public virtual string SublinkController { get; set; }
        public virtual string SublinkAction { get; set; }
        public virtual System.Nullable<int> SublinkFrom { get; set; }
        public virtual string NormalStateClass { get; set; }
        public virtual string HoverStateClass { get; set; }
    }
}

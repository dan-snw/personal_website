#
# .bash_profile - executed for login shells
#
# $HeadURL: https://cfg.oucs.ox.ac.uk/svn/basic/rb3/systems/raven.linux.ox.ac.uk/root/etc/skel/.bash_profile $
# $LastChangedRevision: 49576 $
# $LastChangedDate: 2015-07-09 09:55:44 +0100 (Thu, 09 Jul 2015) $
# $LastChangedBy: oucs0171@OX.AC.UK $
#
runfrags=/etc/shellinit/bash/lib/runfrags
if [ -f $runfrags ]; then
  source $runfrags
  prefix=${PS1:+I}
  runfrags ${prefix:-N} /etc/shellinit/bash/bash_profile.d
  runfrags ${prefix:-N} ${HOME}/.bash_profile.d
fi
